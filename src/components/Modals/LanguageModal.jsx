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
  background: rgba(2, 2, 2, 0.92);
  display: flex;
  padding-top: 5vh;
`;

// На всю ширину знизу, як меню часових поясів
const Panel = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  background: #1f1f23;
  border-top: 2px solid #60cdff;
  border-radius: 14px 14px 0 0;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.9);
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 16px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

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
  color: #a0a0a0;
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
  }
`;

const Body = styled.div`
  flex: 1;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 16px;

  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const LanguageModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <Backdrop onClick={onClose}>
      <Panel role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <Header>
          <MdTranslate size={20} />
          <h2>{t('settings.language.title')}</h2>
          <DecorToggle label={t('settings.decor.label')} title={t('settings.decor.title')} />
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
