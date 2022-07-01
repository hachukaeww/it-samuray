import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";
let dialogsElements = [
  { id: 1, name: "Dimych" },
  { id: 2, name: "Andrew" },
  { id: 3, name: "Sveta" },
  { id: 4, name: "Sasha" },
  { id: 5, name: "Viktor" },
  { id: 6, name: "Valera" },
];
function DialogItem() {
  let path = "/dialogs/";

  let DialogItem = dialogsElements.map((d) => (
    <div className={s.dialogItem}>
      {" "}
      <NavLink to={path + d.id}>{d.name}</NavLink>
    </div>
  ));
  return <div>{DialogItem}</div>;
}

export default DialogItem;
