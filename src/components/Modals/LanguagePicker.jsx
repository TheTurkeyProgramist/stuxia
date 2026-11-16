import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FiSearch, FiCheck } from 'react-icons/fi';
import LanguageScene from './LanguageScene.jsx';
import { useSceneDecor } from '../../utils/sceneDecor.js';
import { ALL_LANGUAGES, isRTL } from '../../i18n/useI18nHelpers';
import '../../../src/i18n/i18n.css';

// ── Styled Components ──────────────────────────────────────────────────────────

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SearchRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--lm-input, #2b2b30);
  border: 1px solid rgba(var(--lm-ink, 255, 255, 255), 0.12);
  border-radius: 8px;
  padding: 8px 12px;
  transition: border-color 0.15s;

  &:focus-within {
    border-color: var(--lm-accent, #60cdff);
    box-shadow: 0 0 0 2px rgba(var(--lm-accent-rgb, 96, 205, 255), 0.15);
  }
`;

const SearchInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  color: var(--lm-text, #ffffff);
  font-size: 13px;
  font-family: inherit;
  flex: 1;

  &::placeholder {
    color: var(--lm-muted, #8a8a90);
  }
`;

// Як у виборі часового поясу: 3 в ряд, на планшеті 2, на телефоні 1.
// Сітка на 6 колонок: картка займає 2, а неповний останній ряд розтягується
// (2 картки — по 3 колонки, 1 картка — на всю ширину), тож порожнеч немає.
const LangGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 12px;

  > * {
    grid-column: span 2;
  }

  > :nth-child(3n + 1):nth-last-child(2),
  > :nth-child(3n + 1):nth-last-child(2) + * {
    grid-column: span 3;
  }

  > :nth-child(3n + 1):last-child {
    grid-column: span 6;
  }

  @media (max-width: 1199px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    > *,
    > :nth-child(3n + 1):nth-last-child(2),
    > :nth-child(3n + 1):nth-last-child(2) + *,
    > :nth-child(3n + 1):last-child {
      grid-column: span 1;
    }

    > :nth-child(2n + 1):last-child {
      grid-column: span 2;
    }
  }

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 8px;

    > *,
    > :nth-child(2n + 1):last-child {
      grid-column: auto;
    }
  }
`;

const LangCard = styled.button`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  min-height: ${(p) => (p.$decor ? '200px' : '64px')};
  /* Картки поза екраном браузер не малює зовсім — прокрутка легша */
  content-visibility: auto;
  contain-intrinsic-size: auto ${(p) => (p.$decor ? '200px' : '64px')};
  padding: 9px 10px;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid
    ${(p) =>
      p.$active
        ? 'var(--lm-accent, #60cdff)'
        : 'rgba(var(--lm-ink, 255, 255, 255), 0.12)'};
  box-shadow: ${(p) =>
    p.$active ? '0 0 0 2px rgba(var(--lm-accent-rgb, 96, 205, 255), 0.35)' : 'none'};
  background: var(--lm-card, #2b2b30);
  transition: border-color 0.15s ease;
  text-align: start;
  font-family: inherit;
  /* На малюнку міста текст завжди білий з тінню; на звичайній картці — за темою */
  --lm-card-fg: ${(p) => (p.$decor ? '#ffffff' : 'var(--lm-text, #ffffff)')};
  --lm-card-sub: ${(p) => (p.$decor ? 'rgba(255, 255, 255, 0.8)' : 'var(--lm-sub, rgba(255, 255, 255, 0.8))')};
  text-shadow: ${(p) =>
    p.$decor
      ? '0 1px 2px rgba(0, 0, 0, 0.9), 0 0 8px rgba(0, 0, 0, 0.6)'
      : 'var(--lm-card-shadow, 0 1px 2px rgba(0, 0, 0, 0.9), 0 0 8px rgba(0, 0, 0, 0.6))'};

  &:hover {
    border-color: rgba(var(--lm-accent-rgb, 96, 205, 255), 0.6);
  }
`;

const LangTextBlock = styled.div`
  position: relative;
  z-index: 1;
  flex: 1;
  min-width: 0;
`;

const LangNative = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: var(--lm-card-fg, #ffffff);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.3;
`;

const LangEnglish = styled.span`
  font-weight: 500;
  color: var(--lm-card-sub, rgba(255, 255, 255, 0.8));
`;

const RtlBadge = styled.span`
  position: relative;
  z-index: 1;
  font-size: 9px;
  background: rgba(255, 179, 108, 0.15);
  color: ${(p) => (p.$decor ? '#ffb36c' : 'var(--lm-rtl, #ffb36c)')};
  border: 1px solid rgba(255, 179, 108, 0.3);
  border-radius: 3px;
  padding: 1px 4px;
  white-space: nowrap;
  flex-shrink: 0;
`;

const ActiveCheck = styled.div`
  position: relative;
  z-index: 1;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--lm-accent, #60cdff);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 10px;
  color: var(--lm-on-accent, #000);
`;

const InfoNote = styled.div`
  font-size: 11px;
  color: var(--lm-muted, #8a8a90);
  background: rgba(var(--lm-ink, 255, 255, 255), 0.03);
  border: 1px solid rgba(var(--lm-ink, 255, 255, 255), 0.06);
  border-radius: 6px;
  padding: 8px 12px;
  line-height: 1.5;
`;

// ── Component ───────────────────────────────────────────────────────────────────

/**
 * LanguagePicker
 * A searchable grid of all supported languages with a country scene on each card.
 * Integrates with react-i18next to change the app language.
 */
const LanguagePicker = () => {
  const { t, i18n } = useTranslation();
  const decorEnabled = useSceneDecor();
  const [search, setSearch] = useState('');

  const currentLang = i18n.language?.split('-')[0] || 'uk';

  // Filter languages based on search query
  const filteredLanguages = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return ALL_LANGUAGES;
    return ALL_LANGUAGES.filter(
      (lang) =>
        lang.nativeName.toLowerCase().includes(q) ||
        lang.name.toLowerCase().includes(q) ||
        lang.code.toLowerCase().includes(q)
    );
  }, [search]);

  const handleSelectLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <Container>
      {/* Search */}
      <SearchRow>
        <FiSearch style={{ color: 'var(--lm-muted, #8a8a90)', fontSize: '14px', flexShrink: 0 }} />
        <SearchInput
          placeholder={t('settings.language.searchPlaceholder')}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoComplete="off"
          spellCheck={false}
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--lm-muted, #8a8a90)',
              cursor: 'pointer',
              padding: '0',
              fontSize: '14px',
            }}
          >
            ×
          </button>
        )}
      </SearchRow>

      <LangGrid>
        {filteredLanguages.map((lang) => {
          const isActive = currentLang === lang.code;
          const rtl = isRTL(lang.code);
          return (
            <LangCard
              key={lang.code}
              $active={isActive}
              $decor={decorEnabled}
              onClick={() => handleSelectLanguage(lang.code)}
              title={lang.code === 'en' ? lang.nativeName : `${lang.nativeName} (${lang.name})`}
            >
              {decorEnabled && <LanguageScene code={lang.code} />}
              {isActive && (
                <ActiveCheck>
                  <FiCheck />
                </ActiveCheck>
              )}
              <LangTextBlock>
                <LangNative>
                  {lang.nativeName}
                  {lang.code !== 'en' && <LangEnglish> ({lang.name})</LangEnglish>}
                </LangNative>
              </LangTextBlock>
              {rtl && <RtlBadge $decor={decorEnabled}>RTL</RtlBadge>}
            </LangCard>
          );
        })}
      </LangGrid>

      {/* Info note about RTL */}
      {!search && (
        <InfoNote>
          🌐 {t('settings.language.rtlNote')}
        </InfoNote>
      )}

      {/* No results */}
      {filteredLanguages.length === 0 && (
        <div style={{ color: 'var(--lm-muted, #8a8a90)', fontSize: '13px', textAlign: 'center', padding: '20px' }}>
          {t('settings.language.noResults')}: "{search}"
        </div>
      )}
    </Container>
  );
};

export default LanguagePicker;
