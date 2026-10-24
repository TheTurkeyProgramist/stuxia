import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import localforage from "localforage";
import InfoModal from "./UserSearchModal.jsx";
import {
  hashPassword,
  verifyPassword,
  canHash,
  stripSecrets,
} from "../../utils/passwordHash";
import {
  auth,
  googleProvider,
  signInWithPopup,
  ensureEmailPasswordAuth,
} from "../../firebase";

const slideIn = keyframes`
  0% { 
    transform: translateY(100%) scale(0.5);
    opacity: 0;
  }
  100% { 
    transform: translateY(0%) scale(1);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  0% { 
    transform: translateY(0%) scale(1); 
    opacity: 1; 
  }
  100% { 
    transform: translateY(100%) scale(0.5); 
    opacity: 0; 
  }
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
  z-index: 1000;
  animation: ${(props) => (props.$isClosing ? fadeOut : "none")} 0.5s ease-out
    forwards;
`;

const ModalContent = styled.div`
  background: ${(props) =>
    props.$isDarkMode
      ? "linear-gradient(145deg, #1f1f26, #121319)"
      : "linear-gradient(145deg, #fffdf9, #f6f3ff)"};
  color: ${(props) => (props.$isDarkMode ? "#f0f0f0" : "#111111")};
  padding: 24px 20px 18px;
  border-radius: 24px;
  width: min(92vw, 440px);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 22px 60px rgba(15, 23, 42, 0.32);
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid ${(props) => (props.$isDarkMode ? "#3d3f4d" : "#f1d9c5")};
  animation: ${(props) => (props.$isClosing ? slideOut : slideIn)} 0.5s ease-out
    forwards;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 179, 108, 0.7);
    border-radius: 999px;
  }
`;

const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  min-width: 250px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -4px;
  right: 5px;
  background: none;
  border: none;
  font-size: 34px;
  cursor: pointer;
  color: ${(props) => (props.$isDarkMode ? "#f5f5f5" : "#000000")};
  &:hover {
    color: #ffb36c;
  }
`;

const Title = styled.h3`
  text-align: center;
  margin: 0;
  font-weight: 900;
  letter-spacing: 0.02em;
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#1b1b1b")};
  width: 100%;
  font-size: 2rem;
  background: linear-gradient(135deg, #ffb36c, #ff7a59, #7ac7ff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeaderCaption = styled.div`
  text-align: center;
  font-size: 13px;
  line-height: 1.5;
  color: ${(props) => (props.$isDarkMode ? "#d6d6d6" : "#5d5d5d")};
  margin-top: -4px;
`;


const Input = styled.input`
  padding: 12px 14px;
  border: 1px solid ${(props) => (props.$isDarkMode ? "#4d5365" : "#ebd4c0")};
  border-radius: 12px;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#111")};
  background: ${(props) => (props.$isDarkMode ? "#2a2d38" : "rgba(255,255,255,0.7)")};
  transition: all 0.2s ease;
  &::placeholder {
    color: ${(props) => (props.$isDarkMode ? "#a7abb8" : "#7a7a7a")};
  }
  &:focus {
    outline: none;
    border-color: #ffb36c;
    box-shadow: 0 0 0 3px rgba(255, 179, 108, 0.2);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #ffb36c 0%, #ff8d6c 100%);
  color: ${(props) => (props.$isDarkMode ? "#181818" : "#111")};
  font-weight: 800;
  padding: 14px 16px;
  border-radius: 14px;
  cursor: pointer;
  border: none;
  font-size: 16px;
  width: 100%;
  box-shadow: 0 10px 22px rgba(255, 153, 93, 0.25);
  transition: transform 0.2s ease, opacity 0.2s ease;
  &:hover:not(:disabled) {
    transform: translateY(-1px);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Divider = styled.div`
  text-align: center;
  font-size: 12px;
  color: ${(props) => (props.$isDarkMode ? "#a7abb8" : "#777")};
`;

const CheckboxRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  line-height: 1.4;
  color: ${(props) => (props.$isDarkMode ? "#d7d7d7" : "#4e4e4e")};
  padding: 4px 2px;

  input {
    accent-color: #ffb36c;
    width: 15px;
    height: 15px;
  }
`;


const TermsBtn = styled.button`
  padding: 0;
  border: none;
  background: none;
  font: inherit;
  color: #ffb36c;
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
`;


const GoogleButton = styled.button`
  background: linear-gradient(135deg, #4d8af7 0%, #2d6ae8 100%);
  color: white;
  font-weight: 700;
  padding: 12px 14px;
  border-radius: 14px;
  border: 2px solid transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  font-size: 16px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 10px 22px rgba(66, 133, 244, 0.25);
  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 12px 26px rgba(66, 133, 244, 0.32);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

const ErrorMessage = styled.div`
  font-size: 12px;
  line-height: 1.4;
  color: #ff6b6b;
  background: rgba(255, 107, 107, 0.09);
  border: 1px solid rgba(255, 107, 107, 0.2);
  border-radius: 10px;
  padding: 10px 12px;
  text-align: center;
`;



const Modal = ({
  onClose,
  onRegister,
  availableAvatars = [],
  isDarkMode = false,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [error, setError] = useState("");
  const [isClosing, setIsClosing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const closeTimerRef = useRef(null);

  useEffect(() => () => clearTimeout(closeTimerRef.current), []);

  const handleClose = (e) => {
    if (e) e.stopPropagation();
    if (closeTimerRef.current) return;
    setIsClosing(true);
    closeTimerRef.current = setTimeout(onClose, 500);
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape" && !showTerms) handleClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showTerms, onClose]);

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    const login = email.trim().toLowerCase();
    if (!login || !password) return setError("Введіть Gmail і пароль!");
    setIsSubmitting(true);
    setError("");
    try {
      const saved = await localforage.getItem("registered_user");
      const savedUser = saved?.account?.toLowerCase() === login ? saved : null;
      if (!savedUser) return setError("Невірний Gmail або пароль!");

      // Старі акаунти зберігали пароль відкритим текстом — приймаємо його
      // востаннє і одразу переводимо на хеш.
      let passwordOk = false;
      let credentials = savedUser.passwordHash
        ? {
            passwordHash: savedUser.passwordHash,
            passwordSalt: savedUser.passwordSalt,
          }
        : {};
      let firebaseUser = null;
      if (savedUser.passwordHash && canHash()) {
        passwordOk = await verifyPassword(password, savedUser);
      } else if (savedUser.password) {
        passwordOk = savedUser.password === password;
        if (passwordOk) credentials = await hashPassword(password);
      } else {
        // Локального хеша немає — пароль перевіряє Firebase.
        firebaseUser = await ensureEmailPasswordAuth(
          savedUser.account,
          password,
          { createIfMissing: false },
        );
        passwordOk = Boolean(firebaseUser);
        if (passwordOk) credentials = await hashPassword(password);
      }
      if (!passwordOk) return setError("Невірний Gmail або пароль!");

      let loggedUser = { ...stripSecrets(savedUser), ...credentials };
      // Зміна пошти підтверджується листом: якщо підтверджено, Firebase вже
      // приймає нову пошту — переносимо її в локальний профіль.
      if (savedUser.pendingEmail) {
        const changed = await ensureEmailPasswordAuth(
          savedUser.pendingEmail,
          password,
          { createIfMissing: false },
        );
        if (changed) {
          firebaseUser = changed;
          loggedUser = {
            ...loggedUser,
            account: savedUser.pendingEmail,
            email: savedUser.pendingEmail,
          };
          delete loggedUser.pendingEmail;
        }
      }
      if (!firebaseUser) {
        firebaseUser = await ensureEmailPasswordAuth(
          savedUser.account,
          password,
        );
      }
      if (firebaseUser) {
        loggedUser = {
          ...loggedUser,
          uid: firebaseUser.uid,
          id: firebaseUser.uid,
        };
      }
      await localforage.setItem("registered_user", loggedUser);
      onRegister(stripSecrets(loggedUser));
      handleClose();
    } catch (err) {
      console.error("Email login error:", err);
      setError("Не вдалося увійти. Спробуйте ще раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleAuth = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isSubmitting) return;
    if (!accepted) return setError("Прийміть угоду!");
    setIsSubmitting(true);
    setError("");
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const firebaseUser = result.user;

      const registrationData = {
        uid: firebaseUser.uid,
        id: firebaseUser.uid,
        account: firebaseUser.email || "",
        firstName:
          firebaseUser.displayName || firebaseUser.email || "Користувач",
        avatar: firebaseUser.photoURL || availableAvatars[0] || "",
        photoURL: firebaseUser.photoURL || "",
        textColor: "grey",
        borderColor: "grey",
        birthDate: "2000-01-01",
      };

      // registered_user — єдиний слот із облікових даних. Не затираємо
      // чужий email-акаунт (і хеш пароля), а свій оновлюємо поверх.
      const existing = await localforage.getItem("registered_user");
      let sessionUser = registrationData;
      if (!existing) {
        await localforage.setItem("registered_user", registrationData);
      } else if (
        existing.account?.toLowerCase() === registrationData.account.toLowerCase()
      ) {
        const merged = {
          ...existing,
          uid: registrationData.uid,
          id: registrationData.id,
          photoURL: registrationData.photoURL || existing.photoURL || "",
        };
        await localforage.setItem("registered_user", merged);
        sessionUser = stripSecrets(merged);
      }
      localforage.removeItem("signup_draft").catch(() => {});
      onRegister(sessionUser);
      handleClose(e);
    } catch (err) {
      console.error("Google Auth Error:", err);
      if (err?.code !== "auth/popup-closed-by-user") {
        setError("Помилка Google: " + (err.message || err.toString()));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ModalOverlay $isClosing={isClosing} onClick={handleClose}>
        <ModalContent
          $isClosing={isClosing}
          onClick={(e) => e.stopPropagation()}
          $isDarkMode={isDarkMode}
        >
          <CloseButton onClick={handleClose} $isDarkMode={isDarkMode}>
            &times;
          </CloseButton>
          <Title $isDarkMode={isDarkMode}>Вхід</Title>
          <HeaderCaption $isDarkMode={isDarkMode}>
            Увійди через Gmail чи Google і почни вивчати погоду з комфортом.
          </HeaderCaption>

          <FormColumn>
            <LoginForm onSubmit={handleEmailLogin}>
              <Input
                type="email"
                name="login-email"
                placeholder="Gmail"
                value={email}
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                $isDarkMode={isDarkMode}
              />
              <Input
                type="password"
                name="login-password"
                placeholder="Пароль"
                value={password}
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                $isDarkMode={isDarkMode}
              />
              <SubmitButton
                type="submit"
                disabled={isSubmitting}
                $isDarkMode={isDarkMode}
              >
                🔒 Увійти
              </SubmitButton>
            </LoginForm>
            <Divider $isDarkMode={isDarkMode}>АБО</Divider>
            {error && <ErrorMessage>{error}</ErrorMessage>}

            <CheckboxRow $isDarkMode={isDarkMode}>
              <input
                id="accept-terms"
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
              />
              <label htmlFor="accept-terms">
                Для входу через Google я погоджуюсь з{" "}
                <TermsBtn
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowTerms(true);
                  }}
                >
                  Угодою
                </TermsBtn>
              </label>
            </CheckboxRow>
            <GoogleButton
              type="button"
              onClick={handleGoogleAuth}
              disabled={!accepted || isSubmitting}
            >
              🔑 Google Вхід
            </GoogleButton>
          </FormColumn>
        </ModalContent>
      </ModalOverlay>
      {showTerms && (
        <InfoModal
          isOpen={showTerms}
          isDarkMode={isDarkMode}
          onClose={() => setShowTerms(false)}
        />
      )}
    </>
  );
};
export default Modal;
