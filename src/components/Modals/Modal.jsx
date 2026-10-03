import React, { useState, useMemo } from "react";
import styled, { keyframes, css } from "styled-components";
import localforage from "localforage";
import InfoModal from "./UserSearchModal.jsx";
import KatSceneModal from "./KatSceneModal";
import { auth, googleProvider, signInWithPopup } from "../../firebase";

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

const flow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const rainbowAnimation = css`
  background: linear-gradient(
    270deg,
    #ff7eb3,
    #ff758c,
    #7afcff,
    #feffb7,
    #58e2c2
  );
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${flow} 5s ease infinite;
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

const TermsBtn = styled.span`
  color: ${(props) => (props.$isDarkMode ? "#ffb36c" : "#ffb36c")};
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
`;

const AvatarOption = styled.div`
  width: 34px;
  height: 34px;
  min-width: 60px;
  min-height: 60px;
  flex-shrink: 0;
  border-radius: 50%;
  padding: 3px;
  background: ${(props) =>
    props.$isSelected ? props.$borderColor : "transparent"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  ${(props) => {
    const isAnimated = props.$borderColor?.includes("270deg");
    if (props.$isSelected && props.$borderColor?.includes("linear-gradient")) {
      return isAnimated
        ? css`
            background-size: 400% 400%;
            animation: ${flow} 5s ease infinite;
          `
        : css`
            background-size: 100% 100%;
            animation: none;
          `;
    }
  }}

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    display: block;
  }
`;

const ImageSelectionContainer = styled.div`
  display: flex;
  gap: 5px;
  overflow-x: auto;
  padding: 5px 2px;
  min-height: 45px;
  align-items: center;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`;

const ColorSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ColorLabel = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: grey;
`;

const ColorContainer = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding: 5px 2px;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ffb36c;
    border-radius: 10px;
  }
`;

const ColorCircle = styled.div`
  width: 30px;
  height: 30px;
  min-width: 30px;
  border-radius: 50%;
  background: ${(props) => props.$color};
  cursor: pointer;
  border: 2px solid ${(props) => (props.$isSelected ? "#000" : "transparent")};
  box-shadow: ${(props) =>
    props.$isSelected ? "0 0 5px rgba(0,0,0,0.5)" : "0 0 2px rgba(0,0,0,0.2)"};

  ${(props) => {
    const isAnimated = props.$color?.includes("270deg");
    if (props.$color?.includes("linear-gradient")) {
      return isAnimated
        ? css`
            background-size: 400% 400%;
            animation: ${flow} 5s ease infinite;
          `
        : css`
            background-size: 100% 100%;
            animation: none;
          `;
    }
  }}
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
  const getPasswordStrength = (password) => {
    if (!password) return { width: "0%", color: "transparent", label: "" };
    let score = 0;
    if (password.length >= 6) score += 1;
    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password) || /[a-z]/.test(password)) score += 1;
    if (/\d/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    if (score <= 1) return { width: "33%", color: "#ff4d4d", label: "Слабкий" };
    if (score <= 2)
      return { width: "66%", color: "#ffb36c", label: "Середній" };
    return { width: "100%", color: "#4caf50", label: "Надійний" };
  };
  const pwStrength = getPasswordStrength(formData.password);
  const [birthDate, setBirthDate] = useState({ day: "", month: "", year: "" });
  const [accepted, setAccepted] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [error, setError] = useState("");
  const [isClosing, setIsClosing] = useState(false);
  const [showKatScene] = useState(false);

  const handleClose = (e) => {
    if (e) e.stopPropagation();
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  const months = [
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
  const years = Array.from(
    { length: new Date().getFullYear() - 1909 + 1 },
    (_, i) => 1909 + i,
  ).reverse();
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const isInvalidDate = useMemo(() => {
    const { day, month, year } = birthDate;
    if (!day || !month || !year) return false;
    const d = parseInt(day);
    const m = parseInt(month);
    const y = parseInt(year);
    const dateCheck = new Date(y, m - 1, d);
    return (
      dateCheck.getFullYear() !== y ||
      dateCheck.getMonth() !== m - 1 ||
      dateCheck.getDate() !== d
    );
  }, [birthDate]);

  const calculateAge = (d, m, y) => {
    const today = new Date();
    const birth = new Date(y, m - 1, d);
    let age = today.getFullYear() - birth.getFullYear();
    const mDiff = today.getMonth() - birth.getMonth();
    if (mDiff < 0 || (mDiff === 0 && today.getDate() < birth.getDate())) age--;
    return age;
  };

  const handleSubmit = async () => {
    if (
      !formData.account ||
      !formData.password ||
      !birthDate.day ||
      !birthDate.month ||
      !birthDate.year
    ) {
      return setError("Заповніть всі поля!");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.account)) {
      return setError("Невірний формат Gmail!");
    }
    if (isInvalidDate) return setError("Такої дати не існує!");
    if (formData.password !== formData.confirmPassword)
      return setError("Паролі не співпадають!");
    if (!accepted) return setError("Прийміть угоду!");

    const age = calculateAge(
      parseInt(birthDate.day),
      parseInt(birthDate.month),
      parseInt(birthDate.year),
    );
    if (age < 13) return setError("Реєстрація дозволена лише з 13 років!");

    const existingUser = await localforage.getItem("registered_user");
    if (existingUser && existingUser.account === formData.account) {
      return setError("Акаунт з таким Gmail вже існує!");
    }
    await completeRegistration();
  };

  const handleGoogleAuth = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const firebaseUser = result.user;

      const registrationData = {
        uid: firebaseUser.uid,
        id: firebaseUser.uid,
        account: firebaseUser.email || "",
        firstName:
          firebaseUser.displayName || firebaseUser.email || "Користувач",
        password: "",
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
      onRegister(registrationData);
      handleClose(e);
    } catch (err) {
      console.error("Google Auth Error:", err);
      setError("Помилка Google: " + (err.message || err.toString()));
    }
  };

  const completeRegistration = async () => {
    const registrationData = {
      account: formData.account,
      firstName: formData.firstName || formData.account,
      password: formData.password,
      avatar: availableAvatars[formData.avatarIndex],
      textColor: formData.textColor,
      borderColor: formData.borderColor,
      birthDate: `${birthDate.year}-${birthDate.month.padStart(2, "0")}-${birthDate.day.padStart(2, "0")}`,
    };
    await localforage.setItem("registered_user", registrationData);
    onRegister(registrationData);
  };

  return (
    <>
      {showKatScene ? (
        <KatSceneModal onClose={completeRegistration} />
      ) : (
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
                    placeholder="Gmail"
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
                      {days.map((d) => (
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
                      {months.map((m, i) => (
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
                    type="checkbox"
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                  />
                  <label>
                    Я погоджуюсь з{" "}
                    <TermsBtn
                      $isDarkMode={isDarkMode}
                      onClick={() => setShowTerms(true)}
                    >
                      Угодою
                    </TermsBtn>
                  </label>
                </CheckboxRow>
                <Google>
                  <SubmitButton
                    onClick={handleSubmit}
                    disabled={!accepted || isInvalidDate}
                    $isDarkMode={isDarkMode}
                  >
                    Зареєструватися
                  </SubmitButton>
                  <GoogleButton type="button" onClick={handleGoogleAuth}>
                    🔑 Google Вхід
                  </GoogleButton>
                </Google>
              </FormColumn>
            </ModalContent>
          </ModalOverlay>
          {showTerms && (
            <InfoModal isOpen={showTerms} onClose={() => setShowTerms(false)} />
          )}
        </>
      )}
    </>
  );
};
export default Modal;
