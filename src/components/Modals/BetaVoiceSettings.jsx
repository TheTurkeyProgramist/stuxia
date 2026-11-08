import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { FiPlay, FiSquare, FiCheck, FiDownloadCloud } from "react-icons/fi";
import { usePrefValue } from "../../utils/betaFeatures";
import {
  VOICE_PREF_KEYS,
  SAMPLE_PHRASE,
  PIPER_VOICES,
  isSpeechSupported,
  loadBrowserVoices,
  describeBrowserVoices,
  getStoredPiperVoices,
  saveVoiceSettings,
  speak,
  stopSpeaking,
} from "../../utils/weatherSpeech";

// Вибір голосу для озвучення прогнозу (бета). Стиль — як у вікні «Параметри».

const Wrap = styled.div`display: flex; flex-direction: column; gap: 10px;`;

const Row = styled.div`display: flex; gap: 8px; flex-wrap: wrap; align-items: center;`;

const EngineButton = styled.button`
  flex: 1; min-width: 150px;
  padding: 8px 12px; border-radius: 6px; cursor: pointer;
  font-size: 13px; font-weight: 600; text-align: left;
  background: ${(p) => (p.$active ? "rgba(96,205,255,0.16)" : "rgba(255,255,255,0.05)")};
  color: ${(p) => (p.$active ? "#60cdff" : "#ffffff")};
  border: 1px solid ${(p) => (p.$active ? "#60cdff" : "rgba(255,255,255,0.12)")};
  span { display: block; font-size: 11px; font-weight: 400; color: #a0a0a0; margin-top: 2px; }
`;

const Label = styled.label`font-size: 12px; color: #a0a0a0;`;

const PhraseInput = styled.input`
  background: #2b2b30; color: #ffffff;
  border: 1px solid rgba(255,255,255,0.15); border-radius: 6px;
  padding: 6px 10px; font-size: 13px; font-family: inherit; width: 100%; box-sizing: border-box;
  outline: none;
  &:focus { border-color: #60cdff; }
`;

const VoiceList = styled.ul`
  list-style: none; margin: 0; padding: 0;
  display: flex; flex-direction: column; gap: 4px;
  max-height: 260px; overflow-y: auto;
`;

const VoiceItem = styled.li`
  display: flex; align-items: center; gap: 8px;
  padding: 6px 8px; border-radius: 6px;
  background: ${(p) => (p.$active ? "rgba(96,205,255,0.12)" : "rgba(255,255,255,0.03)")};
  border: 1px solid ${(p) => (p.$active ? "rgba(96,205,255,0.6)" : "transparent")};
`;

const VoiceSelect = styled.button`
  flex: 1; min-width: 0; text-align: left;
  background: transparent; border: none; color: #ffffff; cursor: pointer;
  font-size: 13px; display: flex; align-items: center; gap: 6px; flex-wrap: wrap;
  svg { color: #60cdff; flex-shrink: 0; }
`;

const VoiceName = styled.span`overflow: hidden; text-overflow: ellipsis;`;

const Badge = styled.span`
  font-size: 10px; padding: 1px 6px; border-radius: 10px;
  background: ${(p) => p.$bg || "rgba(255,255,255,0.1)"};
  color: ${(p) => p.$color || "#d4d4d8"};
  white-space: nowrap;
`;

const PlayButton = styled.button`
  width: 30px; height: 30px; flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  border-radius: 50%; cursor: pointer;
  background: rgba(96,205,255,0.15); color: #60cdff;
  border: 1px solid rgba(96,205,255,0.4);
  &:hover { background: rgba(96,205,255,0.3); }
  &:disabled { opacity: 0.4; cursor: wait; }
`;

const Hint = styled.p`
  margin: 0; font-size: 12px; line-height: 1.5; color: #a0a0a0;
  b { color: #ffffff; }
`;

const ErrorText = styled(Hint)`color: #ff8a8a;`;

const Progress = styled.div`
  height: 4px; border-radius: 2px; background: rgba(255,255,255,0.1); overflow: hidden;
  &::after {
    content: ""; display: block; height: 100%;
    width: ${(p) => p.$percent}%; background: #60cdff; transition: width 0.2s ease;
  }
`;

const RateInput = styled.input`flex: 1; accent-color: #60cdff;`;

const BetaVoiceSettings = () => {
  const engine = usePrefValue(VOICE_PREF_KEYS.engine, "browser");
  const voiceId = usePrefValue(VOICE_PREF_KEYS.voiceId, "");
  const rate = Number(usePrefValue(VOICE_PREF_KEYS.rate, "1")) || 1;

  const [browserVoices, setBrowserVoices] = useState([]);
  const [showAllLanguages, setShowAllLanguages] = useState(false);
  const [storedPiper, setStoredPiper] = useState([]);
  const [phrase, setPhrase] = useState(SAMPLE_PHRASE);
  const [playingId, setPlayingId] = useState(null);
  const [loadingId, setLoadingId] = useState(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;
    loadBrowserVoices().then((list) => {
      if (alive) setBrowserVoices(describeBrowserVoices(list));
    });
    return () => {
      alive = false;
      stopSpeaking();
    };
  }, []);

  useEffect(() => {
    if (engine !== "piper") return undefined;
    let alive = true;
    getStoredPiperVoices().then((list) => alive && setStoredPiper(list));
    return () => {
      alive = false;
    };
  }, [engine]);

  const ukrainianVoices = useMemo(() => browserVoices.filter((v) => v.isUkrainian), [browserVoices]);
  const visibleBrowserVoices = showAllLanguages ? browserVoices : ukrainianVoices;

  const selectVoice = (nextEngine, id) => saveVoiceSettings({ engine: nextEngine, voiceId: id });

  const preview = async (nextEngine, id) => {
    if (playingId === id) {
      stopSpeaking();
      setPlayingId(null);
      return;
    }
    setError("");
    setPlayingId(id);
    if (nextEngine === "piper" && !storedPiper.includes(id)) {
      setLoadingId(id);
      setProgress(0);
    }
    try {
      await speak(phrase.trim() || SAMPLE_PHRASE, {
        engine: nextEngine,
        voiceId: id,
        rate,
        onProgress: ({ loaded, total }) => {
          if (total) setProgress(Math.round((loaded / total) * 100));
        },
      });
    } catch (err) {
      console.error("Voice preview failed:", err);
      setError(
        nextEngine === "piper"
          ? "Не вдалося завантажити або запустити нейромережу. Перевірте інтернет і спробуйте ще раз."
          : `Не вдалося озвучити: ${err.message}`,
      );
    } finally {
      setPlayingId((current) => (current === id ? null : current));
      setLoadingId(null);
      if (nextEngine === "piper") getStoredPiperVoices().then(setStoredPiper);
    }
  };

  return (
    <Wrap>
      <Row>
        <EngineButton type="button" $active={engine !== "piper"} onClick={() => saveVoiceSettings({ engine: "browser", voiceId: "" })}>
          Голоси пристрою
          <span>Миттєво й без завантажень, якість залежить від браузера</span>
        </EngineButton>
        <EngineButton type="button" $active={engine === "piper"} onClick={() => saveVoiceSettings({ engine: "piper", voiceId: PIPER_VOICES[0].id })}>
          Нейромережа Piper
          <span>Однаково на всіх пристроях, модель качається один раз</span>
        </EngineButton>
      </Row>

      <div>
        <Label htmlFor="beta-voice-phrase">Пробна фраза (натисніть ▶ біля голосу)</Label>
        <PhraseInput
          id="beta-voice-phrase"
          value={phrase}
          maxLength={300}
          onChange={(e) => setPhrase(e.target.value)}
        />
      </div>

      <Row>
        <Label htmlFor="beta-voice-rate" style={{ minWidth: 110 }}>Швидкість: {rate.toFixed(1)}×</Label>
        <RateInput
          id="beta-voice-rate"
          type="range"
          min="0.6"
          max="1.6"
          step="0.1"
          value={rate}
          onChange={(e) => saveVoiceSettings({ rate: e.target.value })}
        />
      </Row>

      {engine === "piper" ? (
        <>
          <VoiceList>
            {PIPER_VOICES.map((v) => {
              const isStored = storedPiper.includes(v.id);
              return (
                <VoiceItem key={v.id} $active={voiceId === v.id}>
                  <VoiceSelect type="button" onClick={() => selectVoice("piper", v.id)}>
                    {voiceId === v.id && <FiCheck />}
                    <VoiceName>{v.label}</VoiceName>
                    {isStored ? (
                      <Badge $bg="rgba(74,222,128,0.15)" $color="#86efac">Завантажено</Badge>
                    ) : (
                      <Badge><FiDownloadCloud style={{ verticalAlign: "-1px" }} /> {v.sizeMb} МБ</Badge>
                    )}
                  </VoiceSelect>
                  <PlayButton
                    type="button"
                    aria-label={`Прослухати: ${v.label}`}
                    disabled={!!loadingId && loadingId !== v.id}
                    onClick={() => preview("piper", v.id)}
                  >
                    {playingId === v.id ? <FiSquare /> : <FiPlay />}
                  </PlayButton>
                </VoiceItem>
              );
            })}
          </VoiceList>
          {loadingId && (
            <>
              <Hint>Завантаження моделі… {progress}% (лише перший раз)</Hint>
              <Progress $percent={progress} />
            </>
          )}
          <Hint>
            Модель зберігається в браузері, тож далі озвучення працює навіть без інтернету.
            Перше прослуховування може тривати кілька секунд.
          </Hint>
        </>
      ) : !isSpeechSupported() ? (
        <ErrorText>Цей браузер не підтримує озвучення тексту. Спробуйте «Нейромережу Piper».</ErrorText>
      ) : (
        <>
          {visibleBrowserVoices.length > 0 ? (
            <VoiceList>
              {visibleBrowserVoices.map((v) => (
                <VoiceItem key={v.id} $active={voiceId === v.id}>
                  <VoiceSelect type="button" onClick={() => selectVoice("browser", v.id)}>
                    {voiceId === v.id && <FiCheck />}
                    <VoiceName title={v.name}>{v.name}</VoiceName>
                    {v.isNatural && <Badge $bg="rgba(250,204,21,0.15)" $color="#fde68a">Живий</Badge>}
                    {!v.isLocal && <Badge>Онлайн</Badge>}
                    {!v.isUkrainian && <Badge>{v.lang}</Badge>}
                  </VoiceSelect>
                  <PlayButton type="button" aria-label={`Прослухати: ${v.name}`} onClick={() => preview("browser", v.id)}>
                    {playingId === v.id ? <FiSquare /> : <FiPlay />}
                  </PlayButton>
                </VoiceItem>
              ))}
            </VoiceList>
          ) : (
            <Hint>
              На цьому пристрої немає українського голосу. Найкращі живі голоси (<b>Polina</b> і <b>Ostap</b>) є в
              браузері <b>Microsoft Edge</b>. У Windows можна додати голос: Параметри → Час і мова → Мова й регіон →
              Українська → Мовлення. Або перемкніться на «Нейромережу Piper».
            </Hint>
          )}
          <Row>
            <Label style={{ cursor: "pointer", display: "flex", gap: 6, alignItems: "center" }}>
              <input type="checkbox" checked={showAllLanguages} onChange={(e) => setShowAllLanguages(e.target.checked)} />
              Показати голоси інших мов ({browserVoices.length - ukrainianVoices.length})
            </Label>
          </Row>
        </>
      )}

      {error && <ErrorText>{error}</ErrorText>}
    </Wrap>
  );
};

export default BetaVoiceSettings;
