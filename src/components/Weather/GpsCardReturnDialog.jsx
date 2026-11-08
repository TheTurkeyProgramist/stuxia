import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { BiCurrentLocation, BiTrash } from "react-icons/bi";

// Бета «Вимкнути GPS-картку»: без неї можна мати на одну власну картку більше.
// Коли GPS-картку повертають, а власних карток забагато, людина вибирає, яку прибрати
// (за замовчуванням — додану останньою).

const Overlay = styled.div`
  position: fixed; inset: 0; z-index: 100010;
  background: rgba(0, 0, 0, 0.7); backdrop-filter: blur(6px);
  display: flex; align-items: center; justify-content: center; padding: 16px;
`;

const Dialog = styled.div`
  width: min(440px, 100%); max-height: calc(100vh - 32px); overflow-y: auto;
  background: #1c1c1f; color: #f3f3f3;
  border: 1px solid rgba(255,255,255,0.12); border-radius: 10px;
  padding: 18px; box-shadow: 0 20px 50px rgba(0,0,0,0.5);
`;

const Title = styled.h3`
  margin: 0 0 8px; font-size: 17px; display: flex; align-items: center; gap: 8px;
  svg { color: #60cdff; }
`;

const Text = styled.p`margin: 0 0 12px; font-size: 13px; line-height: 1.5; color: #c5c5c5;`;

const List = styled.ul`list-style: none; margin: 0 0 14px; padding: 0; display: flex; flex-direction: column; gap: 4px;`;

const Item = styled.li`
  label {
    display: flex; align-items: center; gap: 10px; cursor: pointer;
    padding: 8px 10px; border-radius: 6px; font-size: 14px;
    background: ${(p) => (p.$checked ? "rgba(255,107,107,0.12)" : "rgba(255,255,255,0.04)")};
    border: 1px solid ${(p) => (p.$checked ? "rgba(255,107,107,0.6)" : "transparent")};
  }
  input { accent-color: #ff6b6b; }
`;

const Actions = styled.div`display: flex; gap: 8px; justify-content: flex-end; flex-wrap: wrap;`;

const Button = styled.button`
  padding: 7px 14px; border-radius: 6px; font-size: 13px; font-weight: 600; cursor: pointer;
  display: flex; align-items: center; gap: 6px;
  background: ${(p) => (p.$danger ? "rgba(196,43,28,0.2)" : "rgba(255,255,255,0.08)")};
  color: ${(p) => (p.$danger ? "#ff8a8a" : "#ffffff")};
  border: 1px solid ${(p) => (p.$danger ? "rgba(196,43,28,0.6)" : "rgba(255,255,255,0.15)")};
  &:disabled { opacity: 0.4; cursor: not-allowed; }
`;

const GpsCardReturnDialog = ({ cards, removeCount, maxWithGps, onConfirm, onCancel }) => {
  const [selected, setSelected] = useState(() => cards.slice(-removeCount).map((c) => c.id));

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onCancel();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onCancel]);

  const toggle = (id) =>
    setSelected((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (removeCount === 1) return [id];
      return prev.length >= removeCount ? prev : [...prev, id];
    });

  const names = cards
    .filter((c) => selected.includes(c.id))
    .map((c) => `«${c.locationName}»`)
    .join(", ");

  return createPortal(
    <Overlay onClick={onCancel}>
      <Dialog role="dialog" aria-modal="true" aria-labelledby="gps-return-title" onClick={(e) => e.stopPropagation()}>
        <Title id="gps-return-title"><BiCurrentLocation /> Повернути GPS-картку</Title>
        <Text>
          З GPS-карткою можна мати не більше {maxWithGps} власних карток, а зараз їх {cards.length}.
          {removeCount === 1
            ? " Виберіть, яку картку прибрати (запропоновано додану останньою):"
            : ` Виберіть ${removeCount}, які прибрати:`}
        </Text>
        <List>
          {cards.map((card, i) => {
            const checked = selected.includes(card.id);
            return (
              <Item key={card.id} $checked={checked}>
                <label>
                  <input
                    type={removeCount === 1 ? "radio" : "checkbox"}
                    name="gps-return-card"
                    checked={checked}
                    onChange={() => toggle(card.id)}
                  />
                  {i + 1}. {card.locationName}
                </label>
              </Item>
            );
          })}
        </List>
        <Actions>
          <Button type="button" onClick={onCancel}>Скасувати</Button>
          <Button
            type="button"
            $danger
            disabled={selected.length !== removeCount}
            onClick={() => onConfirm(selected)}
          >
            <BiTrash /> Видалити {names || "картку"} і повернути GPS
          </Button>
        </Actions>
      </Dialog>
    </Overlay>,
    document.body,
  );
};

export default GpsCardReturnDialog;
