import React from "react";

// contentRef — для туторіалу (registerRef("weatherModal", el)) на головній картці
const CardSettingsModal = ({ isDarkMode, onClose, contentRef }) => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.6)",
      zIndex: 1300,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
    onClick={onClose}
  >
    <div
      ref={contentRef}
      style={{
        background: isDarkMode ? "#222" : "#fff",
        borderRadius: "10px",
        padding: "20px",
        width: "90%",
        maxWidth: "350px",
        color: isDarkMode ? "#fff" : "#000",
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <h3 style={{ margin: "0 0 15px 0" }}>Налаштування картки</h3>
      <p style={{ fontSize: "13px", color: isDarkMode ? "#aaa" : "#555", marginBottom: "15px" }}>
        Картка тепер використовує вкладки: Зараз / Годинна / Місячна / ШІ.
      </p>
      <button
        onClick={onClose}
        style={{
          width: "100%",
          padding: "10px",
          background: "#ffb36c",
          color: "#000",
          border: "none",
          borderRadius: "5px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Закрити
      </button>
    </div>
  </div>
);

export default CardSettingsModal;
