import React, { useState } from "react";
import authorsData from "../MusicPhoto/authors.json";
import {
  ModalOverlay,
  PlaylistModalContent,
  PlaylistCloseButton,
} from "../MusicPhoto/MusicPhoto.styled.jsx";

const AuthorsDirectoryModal = ({ isOpen, onClose }) => {
  const [selectedAuthor, setSelectedAuthor] = useState(authorsData[0] || null);

  if (!isOpen) return null;

  return (
    <ModalOverlay
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PlaylistModalContent
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        style={{
          background:
            "linear-gradient(145deg, rgba(17,18,34,0.97), rgba(20,28,52,0.97))",
          color: "white",
          border: "1px solid rgba(255,255,255,0.08)",
          padding: "18px",
          borderRadius: "18px",
          maxWidth: "760px",
          width: "92%",
          maxHeight: "78vh",
          overflow: "hidden",
          zIndex: 2050,
        }}
      >
        <PlaylistCloseButton
          onClick={onClose}
          style={{ color: "white" }}
        >
          &times;
        </PlaylistCloseButton>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(220px, 260px) minmax(0, 1fr)",
            gap: "16px",
          }}
        >
          <div>
            <h3
              style={{
                margin: "0 0 12px",
                fontSize: "18px",
                color: "#ffb36c",
              }}
            >
              Автори та джерела
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                maxHeight: "52vh",
                overflowY: "auto",
                paddingRight: "4px",
              }}
            >
              {authorsData.map((authorMeta) => (
                <button
                  key={authorMeta.id || authorMeta.author}
                  onClick={() => setSelectedAuthor(authorMeta)}
                  style={{
                    width: "100%",
                    background:
                      selectedAuthor?.author === authorMeta.author
                        ? "rgba(255,179,108,0.14)"
                        : "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "12px",
                    color: "white",
                    padding: "10px 12px",
                    textAlign: "left",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "14px",
                      lineHeight: 1.3,
                    }}
                  >
                    {authorMeta.author}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      opacity: 0.75,
                      marginTop: "2px",
                    }}
                  >
                    {authorMeta.info
                      ? authorMeta.info.slice(0, 54).trim() +
                        (authorMeta.info.length > 54 ? "…" : "")
                      : "Деталі автора"}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div
            style={{
              minWidth: 0,
              overflowY: "auto",
              maxHeight: "56vh",
              paddingRight: "6px",
            }}
          >
            {selectedAuthor ? (
              <>
                <div
                  style={{
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    paddingBottom: "10px",
                    marginBottom: "12px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      opacity: 0.7,
                      marginBottom: "6px",
                    }}
                  >
                    Автор / Компанія
                  </div>
                  <h4
                    style={{
                      margin: 0,
                      fontSize: "22px",
                      lineHeight: 1.2,
                      color: "#fff",
                    }}
                  >
                    {selectedAuthor.author}
                  </h4>
                </div>

                <div
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.7",
                    color: "rgba(255,255,255,0.9)",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                  }}
                >
                  {selectedAuthor.info || "Опис автора відсутній."}
                </div>

                {(selectedAuthor.linkkone ||
                  selectedAuthor.linknameoneone ||
                  selectedAuthor.linknameonetwo) && (
                  <div
                    style={{
                      marginTop: "18px",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                    }}
                  >
                    {selectedAuthor.linkkone && (
                      <a
                        href={selectedAuthor.linkkone}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: "inline-block",
                          background: "rgba(255,179,108,0.12)",
                          border: "1px solid rgba(255,179,108,0.45)",
                          color: "#ffd39a",
                          padding: "8px 12px",
                          borderRadius: "10px",
                          textDecoration: "none",
                          fontSize: "13px",
                        }}
                      >
                        {selectedAuthor.linknameoneone || "Джерело"}
                      </a>
                    )}

                    {selectedAuthor.linknameonetwo &&
                      selectedAuthor.linkkone && (
                        <span
                          style={{
                            color: "rgba(255,255,255,0.7)",
                            fontSize: "12px",
                            alignSelf: "center",
                          }}
                        >
                          {selectedAuthor.linknameonetwo}
                        </span>
                      )}
                  </div>
                )}

                {(selectedAuthor["Замітка"] ||
                  selectedAuthor["Примітка"]) && (
                  <div
                    style={{
                      marginTop: "18px",
                      padding: "12px 14px",
                      borderRadius: "12px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {selectedAuthor["Замітка"] && (
                      <div style={{ marginBottom: "10px" }}>
                        <div
                          style={{
                            fontSize: "11px",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            opacity: 0.7,
                            marginBottom: "6px",
                          }}
                        >
                          Нотатка
                        </div>
                        <div
                          style={{
                            color: "rgba(255,255,255,0.9)",
                            lineHeight: "1.6",
                            fontSize: "13px",
                          }}
                        >
                          {selectedAuthor["Замітка"]}
                        </div>
                      </div>
                    )}

                    {selectedAuthor["Примітка"] && (
                      <div>
                        <div
                          style={{
                            fontSize: "11px",
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            opacity: 0.7,
                            marginBottom: "6px",
                          }}
                        >
                          Примітка
                        </div>
                        <div
                          style={{
                            color: "rgba(255,255,255,0.9)",
                            lineHeight: "1.6",
                            fontSize: "13px",
                          }}
                        >
                          {selectedAuthor["Примітка"]}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </>
            ) : null}
          </div>
        </div>
      </PlaylistModalContent>
    </ModalOverlay>
  );
};

export default AuthorsDirectoryModal;
