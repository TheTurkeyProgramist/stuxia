import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";
import { MdClose, MdKeyboardArrowUp, MdKeyboardArrowDown, MdKeyboardReturn, MdMic, MdMicNone } from "react-icons/md";
import { getPref, setPref } from "../../utils/prefsStore.js";
import { getCommandHost } from "./commandHost.js";
import { getSuggestions, runCommand, tokenize, findCommand } from "./commands.js";
import { voiceToCommand, VOICE_EXAMPLES } from "./voiceCommands.js";
import { useVoiceInput } from "../AiShared/useVoiceInput.js";

// Розпізнавання мови є не всюди (Firefox, Android WebView) — тоді кнопки мікрофона немає
const VOICE_SUPPORTED =
  typeof window !== "undefined" && !!(window.SpeechRecognition || window.webkitSpeechRecognition);

const HISTORY_KEY = "commands_history";
const COLLAPSED_KEY = "commands_suggestions_collapsed";
const HISTORY_MAX = 50;
const LOG_MAX = 200;
// Після цих команд консоль ховається, щоб було видно результат (як чат у грі)
const CLOSE_AFTER = new Set(["open", "goto", "close"]);
const QUICK = ["/help", "/soundtrack", "/list weather"];

const readHistory = () => {
  try {
    const parsed = JSON.parse(getPref(HISTORY_KEY) || "[]");
    return Array.isArray(parsed) ? parsed.filter((s) => typeof s === "string") : [];
  } catch {
    return [];
  }
};

const writeHistory = (list) => {
  try {
    setPref(HISTORY_KEY, JSON.stringify(list.slice(-HISTORY_MAX)));
  } catch {
    // нема де зберегти — історія лишиться до перезавантаження
  }
};

// Журнал живе між відкриттями консолі (до перезавантаження сторінки)
let sessionLog = [
  { text: "Введіть /help, щоб побачити команди. ↑/↓ — вибрати підказку, Enter або Tab — підставити. Історія — кнопки ↑/↓ біля поля або Esc, потім стрілки.", kind: "info" },
  ...(VOICE_SUPPORTED
    ? [{ text: "🎤 Або натисніть мікрофон і скажіть: «увімкни музику», «додай погоду у Львові», «відкрий магазин».", kind: "info" }]
    : []),
];
const sessionCtx = {};
const INITIAL_LOG_LENGTH = sessionLog.length;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 3000;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 16px;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  @media (min-width: 768px) {
    align-items: center;
  }
`;

const Panel = styled.div`
  --c-bg: ${(p) => (p.$dark ? "#0e1014" : "#fafbfc")};
  --c-fg: ${(p) => (p.$dark ? "#e8e8e8" : "#1a1a1a")};
  --c-muted: ${(p) => (p.$dark ? "#9aa0a6" : "#5f6368")};
  --c-line: ${(p) => (p.$dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)")};
  --c-field: ${(p) => (p.$dark ? "#1a1d22" : "#eef0f2")};
  --c-ok: ${(p) => (p.$dark ? "#7CFC9A" : "#137333")};
  --c-err: ${(p) => (p.$dark ? "#ff8a80" : "#c5221f")};
  --c-accent: #00afce;
  width: 100%;
  /* На весь екран (з відступом 16px): журнал розтягується, поле вводу — внизу */
  height: calc(100vh - 32px);
  height: calc(100dvh - 32px);
  display: flex;
  flex-direction: column;
  background: var(--c-bg);
  color: var(--c-fg);
  border: 1px solid var(--c-line);
  border-radius: 14px;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.45);
  font-family: ui-monospace, "Cascadia Mono", Consolas, "Courier New", monospace;
  overflow: hidden;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 10px 12px 10px 16px;
  border-bottom: 1px solid var(--c-line);
  font-weight: 700;
  font-size: 14px;
`;

const CloseBtn = styled.button`
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: inherit;
  font-size: 18px;
  cursor: pointer;
  opacity: 0.7;
  &:hover {
    opacity: 1;
    background: var(--c-field);
  }
  &:focus-visible {
    outline: 2px solid var(--c-accent);
    outline-offset: 2px;
  }
`;

const Log = styled.div`
  flex: 1;
  min-height: 0;
  background: var(--c-bg);
  overflow-y: auto;
  padding: 10px 16px;
  font-size: 13px;
  line-height: 1.55;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
`;

const LogLine = styled.div`
  color: ${(p) =>
    p.$kind === "ok"
      ? "var(--c-ok)"
      : p.$kind === "error"
        ? "var(--c-err)"
        : p.$kind === "echo"
          ? "var(--c-fg)"
          : "var(--c-muted)"};
  font-weight: ${(p) => (p.$kind === "echo" ? 700 : 400)};
`;

const Quick = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 0 16px 10px;
`;

const Chip = styled.button`
  padding: 4px 10px;
  border: 1px solid var(--c-line);
  border-radius: 999px;
  background: var(--c-field);
  color: var(--c-fg);
  font: inherit;
  font-size: 12px;
  cursor: pointer;
  &:hover,
  &:focus-visible {
    border-color: var(--c-accent);
    outline: none;
  }
`;

const InputArea = styled.div`
  position: relative;
  border-top: 1px solid var(--c-line);
  background: var(--c-bg);
`;

// Заголовок «акордеона» підказок: клік згортає/розгортає список
const SuggestToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 6px 16px;
  border: none;
  border-bottom: 1px solid var(--c-line);
  background: transparent;
  color: var(--c-muted);
  font: inherit;
  font-size: 12px;
  text-align: left;
  cursor: pointer;
  &:hover {
    color: var(--c-fg);
    background: var(--c-field);
  }
  &:focus-visible {
    outline: 2px solid var(--c-accent);
    outline-offset: -2px;
  }
`;

const Chevron = styled.span`
  display: inline-block;
  font-size: 14px;
  transition: transform 0.2s ease;
  transform: rotate(${(p) => (p.$open ? "180deg" : "0deg")});
`;

const Suggestions = styled.ul`
  list-style: none;
  margin: 0;
  padding: 4px 0;
  border-bottom: 1px solid var(--c-line);
  max-height: 40vh;
  overflow-y: auto;
`;

const Suggestion = styled.li`
  display: flex;
  gap: 12px;
  align-items: baseline;
  padding: 5px 16px;
  font-size: 13px;
  cursor: pointer;
  background: ${(p) => (p.$active ? "var(--c-field)" : "transparent")};
  border-left: 3px solid ${(p) => (p.$active ? "var(--c-accent)" : "transparent")};
  b {
    color: var(--c-fg);
    font-weight: 700;
  }
  span {
    color: var(--c-muted);
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const Row = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
`;

const Slash = styled.span`
  color: var(--c-accent);
  font-weight: 900;
  font-size: 16px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 0;
  padding: 8px 10px;
  border: 1px solid var(--c-line);
  border-radius: 8px;
  background: var(--c-field);
  background-image: none;
  box-shadow: none;
  color: var(--c-fg);
  font: inherit;
  font-size: 15px;
  appearance: none;
  &:focus {
    outline: none;
    border-color: var(--c-accent);
  }
`;

const RunBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 40px;
  padding: 0 14px;
  border: none;
  border-radius: 8px;
  background: var(--c-accent);
  color: #fff;
  font: inherit;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  svg {
    font-size: 20px;
  }
  span {
    @media (max-width: 480px) {
      display: none;
    }
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
  &:focus-visible {
    outline: 2px solid var(--c-fg);
    outline-offset: 2px;
  }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(229, 57, 53, 0.55); }
  70% { box-shadow: 0 0 0 10px rgba(229, 57, 53, 0); }
  100% { box-shadow: 0 0 0 0 rgba(229, 57, 53, 0); }
`;

// Кнопки ↑/↓ — історія команд для тих, у кого немає стрілок (телефон)
const KeyBtn = styled.button`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  padding: 0;
  border: 1px solid var(--c-line);
  border-radius: 8px;
  background: var(--c-field);
  color: var(--c-fg);
  font-size: 22px;
  cursor: pointer;
  &:hover:not(:disabled) {
    border-color: var(--c-accent);
  }
  &:disabled {
    opacity: 0.35;
    cursor: default;
  }
  &:focus-visible {
    outline: 2px solid var(--c-accent);
    outline-offset: 2px;
  }
`;

// Мікрофон: червоний і пульсує, поки слухає
const MicBtn = styled(KeyBtn)`
  ${(p) =>
    p.$listening &&
    `
    background: #e53935;
    border-color: #e53935;
    color: #fff;
  `}
  animation: ${(p) => (p.$listening ? pulse : "none")} 1.4s ease-out infinite;
`;

const CommandsModal = ({ isDarkMode, onClose }) => {
  const [value, setValue] = useState("/");
  const [log, setLog] = useState(sessionLog);
  const [history, setHistory] = useState(readHistory);
  const [historyIndex, setHistoryIndex] = useState(-1); // -1 — набираємо нове
  const [active, setActive] = useState(-1); // -1 — нічого не виділено, Enter виконує команду
  const [hideSuggestions, setHideSuggestions] = useState(false);
  const [busy, setBusy] = useState(false);
  // Згорнуті підказки пам'ятаються між відкриттями; Tab доповнює й тоді
  const [collapsed, setCollapsed] = useState(() => {
    try {
      return getPref(COLLAPSED_KEY) === "1";
    } catch {
      return false;
    }
  });
  const toggleCollapsed = () => {
    setCollapsed((prev) => {
      try {
        setPref(COLLAPSED_KEY, prev ? "0" : "1");
      } catch {
        // не збереглось — лишиться до закриття
      }
      return !prev;
    });
    inputRef.current?.focus();
  };
  const inputRef = useRef(null);
  const logRef = useRef(null);

  const suggestions = useMemo(
    () => (hideSuggestions ? [] : getSuggestions(value, getCommandHost())),
    [value, hideSuggestions],
  );

  const panelRef = useRef(null);

  // Фокус у поле; після закриття — туди, звідки відкрили (кнопка «Команди»)
  useEffect(() => {
    const opener = document.activeElement;
    inputRef.current?.focus();
    return () => {
      if (opener && typeof opener.focus === "function" && document.contains(opener)) opener.focus();
    };
  }, []);

  // Поки консоль відкрита, сайт позаду не прокручується. Скролиться html,
  // а в дзеркальному режимі (html.site-mirrored) — body, тож ховаємо на обох
  useEffect(() => {
    const { documentElement: html, body } = document;
    const prev = [html.style.overflow, body.style.overflow];
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    return () => {
      html.style.overflow = prev[0];
      body.style.overflow = prev[1];
    };
  }, []);

  // Esc закриває; Tab/Shift+Tab ходять по колу всередині консолі й не тікають на сайт
  const handlePanelKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
      return;
    }
    if (e.key !== "Tab" || e.defaultPrevented) return;
    const focusable = Array.from(
      panelRef.current?.querySelectorAll("button:not(:disabled), input, [tabindex]:not([tabindex='-1'])") || [],
    ).filter((el) => el.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    } else if (!panelRef.current.contains(document.activeElement)) {
      e.preventDefault();
      first.focus();
    }
  };

  // Виділена стрілками підказка завжди в полі зору списку
  useEffect(() => {
    document.getElementById(`commands-suggestion-${active}`)?.scrollIntoView({ block: "nearest" });
  }, [active]);

  useEffect(() => {
    sessionLog = log;
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [log]);

  const append = (lines) => setLog((prev) => [...prev, ...lines].slice(-LOG_MAX));

  const edit = (next) => {
    setValue(next.startsWith("/") ? next : `/${next}`);
    setActive(-1);
    setHideSuggestions(false);
    setHistoryIndex(-1);
  };

  const accept = (s) => {
    edit(s.text);
    inputRef.current?.focus();
  };

  const execute = async (raw) => {
    const input = raw.trim();
    if (!tokenize(input).length || busy) return;
    const nextHistory = [...history.filter((h) => h !== input), input].slice(-HISTORY_MAX);
    setHistory(nextHistory);
    writeHistory(nextHistory);
    setValue("/");
    setActive(-1);
    setHistoryIndex(-1);
    setHideSuggestions(false);
    append([{ text: `> ${input}`, kind: "echo" }]);

    let cleared = false;
    const ctx = Object.assign(sessionCtx, {
      clearLog: () => {
        cleared = true;
        setLog([]);
      },
      clearHistory: () => {
        setHistory([]);
        writeHistory([]);
      },
    });
    setBusy(true);
    const out = await runCommand(input, getCommandHost(), ctx);
    setBusy(false);
    if (!cleared) append(out);
    inputRef.current?.focus();

    const cmd = findCommand(tokenize(input)[0]);
    if (cmd && CLOSE_AFTER.has(cmd.name) && out[0]?.kind === "ok") setTimeout(onClose, 250);
  };

  const onKeyDown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      if (suggestions.length) setHideSuggestions(true);
      else onClose();
      return;
    }
    // Enter обробляємо самі: коли кнопка «Виконати» вимкнена (у полі лише «/»),
    // браузер не відправляє форму, і виділена підказка не підставлялась
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      submit();
      return;
    }
    if (e.key === "Tab" && suggestions.length) {
      e.preventDefault();
      accept(suggestions[active] || suggestions[0]);
      return;
    }
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      const up = e.key === "ArrowUp";
      // Список підказок відкритий — стрілки ходять по ньому (і на порожньому «/»).
      // Історія — коли список згорнуто чи сховано (Esc), або кнопками ↑/↓ біля поля
      if (suggestions.length && !collapsed && historyIndex === -1) {
        e.preventDefault();
        // Перше натискання ↓ виділяє першу підказку, ↑ — останню
        const n = suggestions.length;
        setActive((i) => (i < 0 || i >= n ? (up ? n - 1 : 0) : (i + (up ? -1 : 1) + n) % n));
        return;
      }
      if (stepHistory(up)) e.preventDefault();
    }
  };

  // Голос: фраза → команда (voiceCommands.js) → виконання, як ніби її набрали
  const { isListening, toggle: toggleVoice } = useVoiceInput({
    onText: (speech) => {
      append([{ text: `🎤 «${speech}»`, kind: "info" }]);
      const cmd = voiceToCommand(speech);
      if (cmd) execute(cmd);
      else {
        append([
          {
            text: `Не зрозумів команду. Спробуйте: ${VOICE_EXAMPLES.map((e) => `«${e}»`).join(", ")}`,
            kind: "error",
          },
        ]);
      }
    },
  });

  // Крок по історії команд (стрілки на клавіатурі й кнопки ↑/↓). false — нікуди йти
  const stepHistory = (up) => {
    if (!history.length || (!up && historyIndex === -1)) return false;
    let next;
    if (up) next = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
    else next = historyIndex + 1 >= history.length ? -1 : historyIndex + 1;
    setHistoryIndex(next);
    setValue(next === -1 ? "/" : history[next]);
    setHideSuggestions(next !== -1);
    return true;
  };

  // Enter: виділена підказка (стрілками чи мишею) — підставити її, інакше виконати команду
  const submit = () => {
    if (!collapsed && suggestions[active]) accept(suggestions[active]);
    else execute(value);
  };

  return createPortal(
    <Backdrop onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <Panel
        $dark={isDarkMode}
        role="dialog"
        aria-modal="true"
        aria-label="Консоль команд"
        ref={panelRef}
        onKeyDown={handlePanelKeyDown}
      >
        <Head>
          <span>/ Команди</span>
          <CloseBtn type="button" onClick={onClose} aria-label="Закрити консоль" title="Закрити (Esc)">
            <MdClose aria-hidden="true" />
          </CloseBtn>
        </Head>

        <Log ref={logRef} aria-live="polite" onClick={() => inputRef.current?.focus()}>
          {log.map((l, i) => (
            <LogLine key={i} $kind={l.kind}>
              {l.text}
            </LogLine>
          ))}
        </Log>

        {log.length <= INITIAL_LOG_LENGTH && (
          <Quick>
            {QUICK.map((q) => (
              <Chip key={q} type="button" onClick={() => execute(q)}>
                {q}
              </Chip>
            ))}
          </Quick>
        )}

        <InputArea>
          {suggestions.length > 0 && (
            <SuggestToggle
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={toggleCollapsed}
              aria-expanded={!collapsed}
              aria-controls="commands-suggestions"
            >
              <span>
                Підказки · {suggestions.length}
                {collapsed ? " (Tab — доповнити)" : ""}
              </span>
              <Chevron $open={!collapsed} aria-hidden="true">
                ▾
              </Chevron>
            </SuggestToggle>
          )}
          {suggestions.length > 0 && !collapsed && (
            <Suggestions role="listbox" id="commands-suggestions" aria-label="Підказки">
              {suggestions.map((s, i) => (
                <Suggestion
                  key={s.text}
                  id={`commands-suggestion-${i}`}
                  role="option"
                  aria-selected={i === active}
                  $active={i === active}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    accept(s);
                  }}
                  onMouseEnter={() => setActive(i)}
                >
                  <b>{s.value}</b>
                  <span>{s.hint}</span>
                </Suggestion>
              ))}
            </Suggestions>
          )}
          <Row
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
          >
            <Slash aria-hidden="true">›</Slash>
            <Input
              ref={inputRef}
              value={value}
              onChange={(e) => edit(e.target.value)}
              onKeyDown={onKeyDown}
              aria-label="Команда"
              aria-autocomplete="list"
              aria-controls={suggestions.length && !collapsed ? "commands-suggestions" : undefined}
              aria-activedescendant={
                suggestions.length && !collapsed && active >= 0 ? `commands-suggestion-${active}` : undefined
              }
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              enterKeyHint="send"
              placeholder={isListening ? "Слухаю… скажіть, наприклад, «увімкни музику»" : "/help"}
            />
            {VOICE_SUPPORTED && (
              <MicBtn
                type="button"
                $listening={isListening}
                onMouseDown={(e) => e.preventDefault()}
                onClick={toggleVoice}
                aria-pressed={isListening}
                aria-label={isListening ? "Зупинити запис" : "Сказати команду голосом"}
                title={isListening ? "Слухаю… (натисніть, щоб зупинити)" : "Сказати команду голосом"}
              >
                {isListening ? <MdMic aria-hidden="true" /> : <MdMicNone aria-hidden="true" />}
              </MicBtn>
            )}
            <KeyBtn
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => stepHistory(true)}
              disabled={!history.length || historyIndex === 0}
              aria-label="Попередня команда (↑)"
              title="Попередня команда (↑)"
            >
              <MdKeyboardArrowUp aria-hidden="true" />
            </KeyBtn>
            <KeyBtn
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => stepHistory(false)}
              disabled={historyIndex === -1}
              aria-label="Наступна команда (↓)"
              title="Наступна команда (↓)"
            >
              <MdKeyboardArrowDown aria-hidden="true" />
            </KeyBtn>
            <RunBtn
              type="submit"
              disabled={busy || !tokenize(value).length}
              aria-label="Виконати (Enter)"
              title="Виконати (Enter)"
            >
              <MdKeyboardReturn aria-hidden="true" />
              <span>Enter</span>
            </RunBtn>
          </Row>
        </InputArea>
      </Panel>
    </Backdrop>,
    document.body,
  );
};

export default CommandsModal;
