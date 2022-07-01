import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/MessageItem";
import s from "./Dialogs.module.css";



function Dialogs ()  {
  return (
    <div className={s.dialog}>
      <DialogItem />
      <MessageItem/>
    
    </div>
  );
};
export default Dialogs;
