import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, updateItem, selectItems } from "./itemsSlice";

import i18n from "../../i18n/i18n.js";
const ItemsManager = () => {
  const [text, setText] = useState("");
  const items = useSelector(selectItems);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addItem({ id: Date.now(), text }));
      setText("");
    }
  };

  const handleUpdate = (id) => {
    const newText = prompt(i18n.t("ui.ItemsManager.vveditNovyiTekst"));
    if (newText) {
      dispatch(updateItem({ id, text: newText }));
    }
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={i18n.t("ui.ItemsManager.novyiElement")}
      />
      <button onClick={handleAdd}>{i18n.t("ui.ItemsManager.dodaty")}</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleUpdate(item.id)}>{i18n.t("ui.ItemsManager.redahuvaty")}</button>
            <button onClick={() => dispatch(removeItem(item.id))}>
              {i18n.t("ui.ItemsManager.vydalyty")}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsManager;
