import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { MdTranslate } from 'react-icons/md';
import LanguagePicker from './LanguagePicker.jsx';
import DecorToggle from './DecorToggle.jsx';
import { SheetBackdrop, SheetHeader, sheetPanelAnim, useSheetClose } from './sheetModal.jsx';
import { ALL_LANGUAGES } from '../../i18n/useI18nHelpers';

// Шар на весь екран: затемнення (SheetBackdrop) + шторка поверх нього
const Layer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200000;
  display: flex;
  padding-top: 0;
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
  --sheet-accent: var(--lm-accent);
  position: relative;
  z-index: 1;
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  color: var(--lm-text);
  background: var(--lm-bg);
  border-radius: 0;
  box-shadow: 0 -10px 60px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  ${sheetPanelAnim}
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
  const { t, i18n } = useTranslation();
  const isLight = !isDarkMode;
  const { closing, requestClose, onPanelAnimationEnd } = useSheetClose(isOpen, onClose);
  const langCode = i18n.language?.split('-')[0] || 'uk';
  const currentLang = ALL_LANGUAGES.find((l) => l.code === langCode);

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

  if (!isOpen) return null;

  return createPortal(
    <Layer onClick={requestClose}>
      <SheetBackdrop $light={isLight} $closing={closing} $z={0} />
      <Panel
        $light={isLight}
        $closing={closing}
        role="dialog"
        aria-modal="true"
        aria-labelledby="language-sheet-title"
        onClick={(e) => e.stopPropagation()}
        onAnimationEnd={onPanelAnimationEnd}
      >
        <SheetHeader
          light={isLight}
          titleId="language-sheet-title"
          icon={<MdTranslate />}
          title={t('settings.language.title')}
          subtitle={currentLang ? <b>{currentLang.nativeName}</b> : null}
          onClose={requestClose}
          closeLabel={t('common.close')}
          actions={
            <DecorToggle
              label={t('settings.decor.label')}
              title={t('settings.decor.title')}
              isDarkMode={isDarkMode}
            />
          }
        />
        <Body>
          <LanguagePicker />
        </Body>
      </Panel>
    </Layer>,
    document.body
  );
};

export default LanguageModal;
