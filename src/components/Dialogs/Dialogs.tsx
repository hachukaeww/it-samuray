import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

function Dialogs() {
  return (
    <div className={s.dialog}>
      <div className={s.dialogItems}>
        <div className={s.dialogItem}>
          <NavLink to="dialogs/1">Muhammad</NavLink>
        </div>
        <div className={s.dialogItem}>
          <NavLink to="dialogs/2">Abdullah</NavLink>
        </div>
        <div className={s.dialogItem}>
          <NavLink to="dialogs/3">Nikolay</NavLink>
        </div>
        <div className={s.dialogItem}>
          <NavLink to="dialogs/4">Anzor </NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>Как дела?</div>
        <div className={s.message}>Ок</div>
        <div className={s.message}>Норм</div>
      </div>
    </div>
  );
}

export default Dialogs;
