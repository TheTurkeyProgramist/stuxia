import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { MdClose, MdTranslate } from 'react-icons/md';
import LanguagePicker from './LanguagePicker.jsx';
import DecorToggle from './DecorToggle.jsx';

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200000;
  /* Без backdrop-filter: розмиття відео хіро під модалкою перераховувалось щокадру й гальмувало прокрутку */
  background: ${(p) => (p.$light ? "rgba(0, 0, 0, 0.45)" : "rgba(2, 2, 2, 0.92)")};
  display: flex;
  padding-top: 5vh;
`;

// На всю ширину знизу, як меню часових поясів
const Panel = styled.div`
  /* Кольори вікна й вибору мови (LanguagePicker бере їх звідси) */
  ${(p) =>
    p.$light
      ? `
    --lm-bg: #f8fafc; --lm-text: #111827; --lm-sub: rgba(0, 0, 0, 0.62); --lm-muted: #5b6270;
    --lm-input: #ffffff; --lm-card: #ffffff; --lm-ink: 0, 0, 0;
    --lm-accent: #0a7fb8; --lm-accent-rgb: 10, 127, 184; --lm-on-accent: #ffffff;
    --lm-card-shadow: none; --lm-rtl: #8a4300;
  `
      : `
    --lm-bg: #1f1f23; --lm-text: #ffffff; --lm-sub: rgba(255, 255, 255, 0.8); --lm-muted: #8a8a90;
    --lm-input: #2b2b30; --lm-card: #2b2b30; --lm-ink: 255, 255, 255;
    --lm-accent: #60cdff; --lm-accent-rgb: 96, 205, 255; --lm-on-accent: #000000;
    --lm-card-shadow: 0 1px 2px rgba(0, 0, 0, 0.9), 0 0 8px rgba(0, 0, 0, 0.6); --lm-rtl: #ffb36c;
  `}
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  color: var(--lm-text);
  background: var(--lm-bg);
  border-top: 2px solid var(--lm-accent);
  border-radius: 14px 14px 0 0;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.9);
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 16px;
  color: var(--lm-text);
  font-size: 16px;
  font-weight: 700;
  border-bottom: 1px solid rgba(var(--lm-ink), 0.08);

  h2 {
    flex: 1;
    margin: 0;
    font-size: inherit;
  }
`;

const CloseButton = styled.button`
  display: flex;
  background: transparent;
  border: none;
  color: var(--lm-muted);
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;

  &:hover {
    background: rgba(var(--lm-ink), 0.1);
    color: var(--lm-text);
  }
`;

const Body = styled.div`
  flex: 1;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 16px;

  /* Видимий скролбар: scrollbar-color з html (App.css) успадковується, і тоді Chrome
     ігнорує ::-webkit-scrollbar — тож задаємо стандартні властивості явно */
  scrollbar-width: auto;
  scrollbar-color: var(--lm-accent) rgba(var(--lm-ink), 0.08);

  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const LanguageModal = ({ isOpen, onClose, isDarkMode = true }) => {
  const { t } = useTranslation();
  const isLight = !isDarkMode;

  // Поки вікно відкрите — без скролбару сайту. Скролиться html, а в дзеркальному
  // режимі (App.css, html.site-mirrored) — body, тож ховаємо на обох і повертаємо як було
  useEffect(() => {
    if (!isOpen) return undefined;
    const { documentElement: html, body } = document;
    const prev = [html.style.overflow, body.style.overflow];
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    return () => {
      html.style.overflow = prev[0];
      body.style.overflow = prev[1];
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <Backdrop $light={isLight} onClick={onClose}>
      <Panel $light={isLight} role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <Header>
          <MdTranslate size={20} />
          <h2>{t('settings.language.title')}</h2>
          <DecorToggle
            label={t('settings.decor.label')}
            title={t('settings.decor.title')}
            isDarkMode={isDarkMode}
          />
          <CloseButton type="button" onClick={onClose} aria-label={t('common.close')}>
            <MdClose size={20} />
          </CloseButton>
        </Header>
        <Body>
          <LanguagePicker />
        </Body>
      </Panel>
    </Backdrop>,
    document.body
  );
};

export default LanguageModal;
