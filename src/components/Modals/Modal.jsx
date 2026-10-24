import React, { useState, useMemo, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import localforage from "localforage";
import InfoModal from "./UserSearchModal.jsx";
import { hashPassword, stripSecrets } from "../../utils/passwordHash";
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

const FieldWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
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
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.04);
  &::placeholder {
    color: ${(props) => (props.$isDarkMode ? "#a7abb8" : "#7a7a7a")};
  }
  &:focus {
    outline: none;
    border-color: #ffb36c;
    box-shadow: 0 0 0 3px rgba(255, 179, 108, 0.2);
  }
`;

const Select = styled.select`
  padding: 11px 12px;
  border: 1px solid ${(props) => (props.$isDarkMode ? "#4d5365" : "#ebd4c0")};
  border-radius: 12px;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  color: ${(props) => (props.$isDarkMode ? "#fff" : "#111")};
  background: ${(props) => (props.$isDarkMode ? "#2a2d38" : "rgba(255,255,255,0.75)")};
  cursor: pointer;
  transition: all 0.2s ease;
  &:focus {
    outline: none;
    border-color: #ffb36c;
    box-shadow: 0 0 0 3px rgba(255, 179, 108, 0.2);
  }
`;

const DateRow = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
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

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #ffb36c 0%, #ff8d6c 100%);
  color: ${(props) => (props.$isDarkMode ? "#181818" : "#111")};
  font-weight: 800;
  padding: 14px 16px;
  border-radius: 14px;
  cursor: pointer;
  border: none;
  font-size: 16px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
  box-shadow: 0 10px 22px rgba(255, 153, 93, 0.25);
  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 12px 26px rgba(255, 153, 93, 0.3);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }
  width: 100%;
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

const Google = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 4px;
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
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 26px rgba(66, 133, 244, 0.32);
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

const StrengthBar = styled.div`
  width: 100%;
  height: 7px;
  border-radius: 999px;
  background: ${(props) =>
    props.$isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"};
  overflow: hidden;
  margin-top: -2px;
`;

const StrengthFill = styled.div`
  height: 100%;
  border-radius: inherit;
  background: ${(props) => props.$color};
  width: ${(props) => props.$width};
  transition: width 0.3s ease, background-color 0.3s ease;
`;
const MONTHS = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];
const DAYS = Array.from({ length: 31 }, (_, i) => i + 1);
const DRAFT_KEY = "signup_draft";
const MIN_YEAR = 1909;
const MIN_PASSWORD_LENGTH = 6;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const getPasswordStrength = (password) => {
  if (!password) return { width: "0%", color: "transparent", label: "" };
  let score = 0;
  if (password.length >= 6) score += 1;
  if (password.length >= 8) score += 1;
  if (/[A-Za-z]/.test(password)) score += 1;
  if (/\d/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;
  if (score <= 1) return { width: "33%", color: "#ff4d4d", label: "Слабкий" };
  if (score <= 2) return { width: "66%", color: "#ffb36c", label: "Середній" };
  return { width: "100%", color: "#4caf50", label: "Надійний" };
};

const calculateAge = (d, m, y) => {
  const today = new Date();
  const birth = new Date(y, m - 1, d);
  let age = today.getFullYear() - birth.getFullYear();
  const mDiff = today.getMonth() - birth.getMonth();
  if (mDiff < 0 || (mDiff === 0 && today.getDate() < birth.getDate())) age--;
  return age;
};

const Modal = ({
  onClose,
  onRegister,
  availableAvatars = [],
  isDarkMode = false,
}) => {
  const [formData, setFormData] = useState({
    account: "",
    firstName: "",
    password: "",
    confirmPassword: "",
    avatarIndex: 0,
    textColor: "grey",
    borderColor: "grey",
  });
  const pwStrength = useMemo(
    () => getPasswordStrength(formData.password),
    [formData.password],
  );
  const [birthDate, setBirthDate] = useState({ day: "", month: "", year: "" });
  const [accepted, setAccepted] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [error, setError] = useState("");
  const [isClosing, setIsClosing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const closeTimerRef = useRef(null);

  useEffect(() => () => clearTimeout(closeTimerRef.current), []);

  // Чернетка форми (без паролів) на випадок раптового закриття.
  const [draftLoaded, setDraftLoaded] = useState(false);
  useEffect(() => {
    let cancelled = false;
    localforage
      .getItem(DRAFT_KEY)
      .then((draft) => {
        if (cancelled || !draft) return;
        if (draft.account)
          setFormData((prev) => ({ ...prev, account: draft.account }));
        if (draft.birthDate) setBirthDate(draft.birthDate);
        if (draft.accepted) setAccepted(true);
      })
      .catch(() => {})
      .finally(() => !cancelled && setDraftLoaded(true));
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!draftLoaded) return;
    const timer = setTimeout(() => {
      localforage
        .setItem(DRAFT_KEY, {
          account: formData.account,
          birthDate,
          accepted,
        })
        .catch(() => {});
    }, 300);
    return () => clearTimeout(timer);
  }, [draftLoaded, formData.account, birthDate, accepted]);

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

  const years = useMemo(
    () =>
      Array.from(
        { length: new Date().getFullYear() - MIN_YEAR + 1 },
        (_, i) => MIN_YEAR + i,
      ).reverse(),
    [],
  );

  const isInvalidDate = useMemo(() => {
    const { day, month, year } = birthDate;
    if (!day || !month || !year) return false;
    const d = Number(day);
    const m = Number(month);
    const y = Number(year);
    const dateCheck = new Date(y, m - 1, d);
    return (
      dateCheck.getFullYear() !== y ||
      dateCheck.getMonth() !== m - 1 ||
      dateCheck.getDate() !== d
    );
  }, [birthDate]);

  const handleSubmit = async () => {
    if (isSubmitting) return;
    const account = formData.account.trim();
    if (
      !account ||
      !formData.password ||
      !birthDate.day ||
      !birthDate.month ||
      !birthDate.year
    ) {
      return setError("Заповніть всі поля!");
    }
    if (!EMAIL_REGEX.test(account)) return setError("Невірний формат Gmail!");
    if (isInvalidDate) return setError("Такої дати не існує!");
    if (formData.password.length < MIN_PASSWORD_LENGTH)
      return setError(
        `Пароль має містити мінімум ${MIN_PASSWORD_LENGTH} символів!`,
      );
    if (formData.password !== formData.confirmPassword)
      return setError("Паролі не співпадають!");
    if (!accepted) return setError("Прийміть угоду!");

    const age = calculateAge(
      Number(birthDate.day),
      Number(birthDate.month),
      Number(birthDate.year),
    );
    if (age < 13) return setError("Реєстрація дозволена лише з 13 років!");

    setIsSubmitting(true);
    setError("");
    try {
      const existingUser = await localforage.getItem("registered_user");
      if (existingUser?.account?.toLowerCase() === account.toLowerCase()) {
        return setError("Акаунт з таким Gmail вже існує!");
      }
      await completeRegistration(account);
    } catch (err) {
      console.error("Registration error:", err);
      setError("Не вдалося зареєструватися. Спробуйте ще раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleAuth = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const firebaseUser = result.user;

      const registrationData = {
        uid: firebaseUser.uid,
        id: firebaseUser.uid,
        account: firebaseUser.email || "",
        firstName:
          firebaseUser.displayName || firebaseUser.email || "Користувач",
        avatar:
          firebaseUser.photoURL ||
          (availableAvatars.length
            ? availableAvatars[formData.avatarIndex]
            : ""),
        photoURL: firebaseUser.photoURL || "",
        textColor: formData.textColor || "grey",
        borderColor: formData.borderColor || "grey",
        birthDate: "2000-01-01",
      };

      await localforage.setItem("registered_user", registrationData);
      localforage.removeItem(DRAFT_KEY).catch(() => {});
      onRegister(registrationData);
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

  const completeRegistration = async (account) => {
    const firebaseUser = await ensureEmailPasswordAuth(
      account,
      formData.password,
    );
    const registrationData = {
      ...(firebaseUser ? { uid: firebaseUser.uid, id: firebaseUser.uid } : {}),
      account,
      firstName: formData.firstName || account,
      ...(await hashPassword(formData.password)),
      avatar: availableAvatars[formData.avatarIndex],
      textColor: formData.textColor,
      borderColor: formData.borderColor,
      birthDate: `${birthDate.year}-${String(birthDate.month).padStart(2, "0")}-${String(birthDate.day).padStart(2, "0")}`,
    };
    await localforage.setItem("registered_user", registrationData);
    localforage.removeItem(DRAFT_KEY).catch(() => {});
    onRegister(stripSecrets(registrationData));
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
              <Title $isDarkMode={isDarkMode}>Реєстрація</Title>
              <HeaderCaption $isDarkMode={isDarkMode}>
                Створи акаунт і почни вивчати погоду з комфортом.
              </HeaderCaption>

              <FormColumn>
                <FieldWrap>
                  <Input
                    type="email"
                    name="signup-email"
                    placeholder="Gmail"
                    value={formData.account}
                    autoComplete="email"
                    onChange={(e) =>
                      setFormData({ ...formData, account: e.target.value })
                    }
                    $isDarkMode={isDarkMode}
                  />
                </FieldWrap>

                <FieldWrap>
                  <DateRow>
                    <Select
                      value={birthDate.day}
                      onChange={(e) =>
                        setBirthDate({ ...birthDate, day: e.target.value })
                      }
                      $isDarkMode={isDarkMode}
                    >
                      <option value="" disabled>
                        День
                      </option>
                      {DAYS.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </Select>
                    <Select
                      value={birthDate.month}
                      onChange={(e) =>
                        setBirthDate({ ...birthDate, month: e.target.value })
                      }
                      $isDarkMode={isDarkMode}
                    >
                      <option value="" disabled>
                        Місяць
                      </option>
                      {MONTHS.map((m, i) => (
                        <option key={i} value={i + 1}>
                          {m}
                        </option>
                      ))}
                    </Select>

                    <Select
                      value={birthDate.year}
                      onChange={(e) =>
                        setBirthDate({ ...birthDate, year: e.target.value })
                      }
                      $isDarkMode={isDarkMode}
                    >
                      <option value="" disabled>
                        Рік
                      </option>
                      {years.map((y) => (
                        <option key={y} value={y}>
                          {y}
                        </option>
                      ))}
                    </Select>
                  </DateRow>
                </FieldWrap>

                {isInvalidDate && (
                  <ErrorMessage>Такої дати не існує!</ErrorMessage>
                )}

                <FieldWrap>
                  <Input
                    name="signup-password-field"
                    type="password"
                    placeholder="Пароль"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    $isDarkMode={isDarkMode}
                    autoComplete="new-password"
                    autoCapitalize="none"
                    autoCorrect="off"
                    spellCheck={false}
                    data-form-type="other"
                    data-lpignore="true"
                  />
                  {formData.password && (
                    <>
                      <StrengthBar $isDarkMode={isDarkMode}>
                        <StrengthFill
                          $color={pwStrength.color}
                          $width={pwStrength.width}
                        />
                      </StrengthBar>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: "bold",
                          color: pwStrength.color,
                          alignSelf: "flex-end",
                          marginTop: "-2px",
                        }}
                      >
                        Надійність: {pwStrength.label}
                      </span>
                    </>
                  )}
                </FieldWrap>

                <FieldWrap>
                  <Input
                    name="signup-confirm-password-field"
                    type="password"
                    placeholder="Підтвердіть пароль"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    $isDarkMode={isDarkMode}
                    autoComplete="new-password"
                    autoCapitalize="none"
                    autoCorrect="off"
                    spellCheck={false}
                    data-form-type="other"
                    data-lpignore="true"
                  />
                </FieldWrap>

                {error && <ErrorMessage>{error}</ErrorMessage>}

                <CheckboxRow $isDarkMode={isDarkMode}>
                  <input
                    id="accept-terms"
                    type="checkbox"
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                  />
                  <label htmlFor="accept-terms">
                    Я погоджуюсь з{" "}
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
                <Google>
                  <SubmitButton
                    onClick={handleSubmit}
                    disabled={!accepted || isInvalidDate || isSubmitting}
                    $isDarkMode={isDarkMode}
                  >
                    Зареєструватися
                  </SubmitButton>
                  <GoogleButton
                    type="button"
                    onClick={handleGoogleAuth}
                    disabled={isSubmitting}
                  >
                    🔑 Google Вхід
                  </GoogleButton>
                </Google>
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
