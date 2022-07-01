import React from 'react';
import s from "./ProfileInfo.module.css";

function ProfileInfo() {
  return (
    <div>
    <div>
    <img className={s.profile__logo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxYiTEEC2fBoCXT4jV2yHq5KMXuYn3oeryxA&usqp=CAU' />
  </div>
  <div className={s.description}>
    ava + description
  </div>
  </div>
  )
}

export default ProfileInfo;