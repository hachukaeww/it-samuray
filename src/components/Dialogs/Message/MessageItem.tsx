import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import s from './MessageItem.module.css';
function MessageItem() {
  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your it-kamasutra?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
  ];
      let messageitem = messages.map(m => <div className={s.message}>{m.message}</div> )
  return (
    <div>{messageitem}</div>
    
  )
}

export default MessageItem;