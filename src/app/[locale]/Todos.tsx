"use client";
import { useTranslate, T } from "@tolgee/react";
import { onAdd } from "./actions";
import { useState, useTransition } from "react";
import { DeleteButton } from "./DeleteButton";

type Props = {
  items: any[];
};

export const Todos = ({ items }: Props) => {
  const { t } = useTranslate();

  const [text, setText] = useState("");

  const [isAdding, startAdding] = useTransition();

  function handleAdd(data: FormData) {
    startAdding(async () => {
      onAdd(data);
      setText("");
    });
  }

  return (
    <section className="items">
      <form className="items__new-item" action={handleAdd}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          name="text"
          placeholder={t("add-item-input-placeholder")}
        />
        <button type="submit" className="button" disabled={isAdding || !text}>
          <img src="/img/iconAdd.svg" />
          <T keyName="add-item-add-button" />
        </button>
      </form>
      <div className="items__list">
        {items.map((item, i) => (
          <div key={i} className="item">
            <div className="item__text">{item.text}</div>
            <DeleteButton itemId={item.id} />
          </div>
        ))}
      </div>
      <div className="items__buttons">
        <button className="button">
          <img src="/img/iconShare.svg" />
          <T keyName="share-button" />
        </button>
        <button className="button button--secondary">
          <img src="/img/iconMail.svg" />
          <T keyName="send-via-email" />
        </button>
      </div>
    </section>
  );
};
