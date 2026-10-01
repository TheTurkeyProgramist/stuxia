import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FiSearch, FiGlobe, FiCheck } from 'react-icons/fi';
import { LANGUAGE_GROUPS, ALL_LANGUAGES, isRTL } from '../../i18n/useI18nHelpers';
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
  background: #2b2b30;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  padding: 8px 12px;
  transition: border-color 0.15s;

  &:focus-within {
    border-color: #60cdff;
    box-shadow: 0 0 0 2px rgba(96, 205, 255, 0.15);
  }
`;

const SearchInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 13px;
  font-family: inherit;
  flex: 1;

  &::placeholder {
    color: #7a7a80;
  }
`;

const RegionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const RegionTitle = styled.div`
  font-size: 11px;
  font-weight: 700;
  color: #60cdff;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding-bottom: 4px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

const LangGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(158px, 1fr));
  gap: 5px;
`;

const LangCard = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 7px;
  cursor: pointer;
  border: 1px solid
    ${(p) =>
      p.$active
        ? '#60cdff'
        : 'rgba(255, 255, 255, 0.07)'};
  background: ${(p) =>
    p.$active
      ? 'rgba(96, 205, 255, 0.12)'
      : 'rgba(255, 255, 255, 0.03)'};
  transition: all 0.15s ease;
  text-align: start;
  font-family: inherit;

  &:hover {
    background: rgba(96, 205, 255, 0.08);
    border-color: rgba(96, 205, 255, 0.3);
  }
`;

const LangTextBlock = styled.div`
  flex: 1;
  min-width: 0;
`;

const LangNative = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.3;
`;

const LangSpeakers = styled.div`
  font-size: 10px;
  color: #a0a0a0;
  margin-top: 1px;
`;

const RtlBadge = styled.span`
  font-size: 9px;
  background: rgba(255, 179, 108, 0.15);
  color: #ffb36c;
  border: 1px solid rgba(255, 179, 108, 0.3);
  border-radius: 3px;
  padding: 1px 4px;
  white-space: nowrap;
  flex-shrink: 0;
`;

const ActiveCheck = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #60cdff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 10px;
  color: #000;
`;

const InfoNote = styled.div`
  font-size: 11px;
  color: #7a7a80;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 6px;
  padding: 8px 12px;
  line-height: 1.5;
`;

// ── Component ───────────────────────────────────────────────────────────────────

/**
 * LanguagePicker
 * A searchable grid of all supported languages, grouped by region.
 * Integrates with react-i18next to change the app language.
 */
const LanguagePicker = () => {
  const { t, i18n } = useTranslation();
  const [search, setSearch] = useState('');

  const currentLang = i18n.language?.split('-')[0] || 'uk';

  // Filter languages based on search query
  const filteredGroups = useMemo(() => {
    if (!search.trim()) return LANGUAGE_GROUPS;
    const q = search.toLowerCase();
    return LANGUAGE_GROUPS.map((group) => ({
      ...group,
      languages: group.languages.filter(
        (lang) =>
          lang.nativeName.toLowerCase().includes(q) ||
          lang.name.toLowerCase().includes(q) ||
          lang.code.toLowerCase().includes(q)
      ),
    })).filter((group) => group.languages.length > 0);
  }, [search]);

  const handleSelectLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <Container>
      {/* Search */}
      <SearchRow>
        <FiSearch style={{ color: '#7a7a80', fontSize: '14px', flexShrink: 0 }} />
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
              color: '#7a7a80',
              cursor: 'pointer',
              padding: '0',
              fontSize: '14px',
            }}
          >
            ×
          </button>
        )}
      </SearchRow>

      {/* Language groups */}
      {filteredGroups.map((group) => (
        <RegionGroup key={group.regionKey}>
          <RegionTitle>
            {t(`settings.language.regions.${group.regionKey}`)}
          </RegionTitle>
          <LangGrid>
            {group.languages.map((lang) => {
              const isActive = currentLang === lang.code;
              const rtl = isRTL(lang.code);
              return (
                <LangCard
                  key={lang.code}
                  $active={isActive}
                  onClick={() => handleSelectLanguage(lang.code)}
                  title={`${lang.nativeName} • ${lang.speakers}`}
                >
                  {isActive ? (
                    <ActiveCheck>
                      <FiCheck />
                    </ActiveCheck>
                  ) : (
                    <FiGlobe
                      style={{ color: '#a0a0a0', fontSize: '14px', flexShrink: 0 }}
                    />
                  )}
                  <LangTextBlock>
                    <LangNative>{lang.nativeName}</LangNative>
                    <LangSpeakers>{lang.speakers}</LangSpeakers>
                  </LangTextBlock>
                  {rtl && <RtlBadge>RTL</RtlBadge>}
                </LangCard>
              );
            })}
          </LangGrid>
        </RegionGroup>
      ))}

      {/* Info note about RTL */}
      {!search && (
        <InfoNote>
          🌐 {t('settings.language.rtlNote')}
        </InfoNote>
      )}

      {/* No results */}
      {filteredGroups.length === 0 && (
        <div style={{ color: '#7a7a80', fontSize: '13px', textAlign: 'center', padding: '20px' }}>
          {t('common.search')}: "{search}" — {t('common.error')}
        </div>
      )}
    </Container>
  );
};

export default LanguagePicker;
