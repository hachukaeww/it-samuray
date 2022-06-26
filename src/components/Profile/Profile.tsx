import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img className={s.profile__logo} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxYiTEEC2fBoCXT4jV2yHq5KMXuYn3oeryxA&usqp=CAU' />
      </div>
      <div>
        ava + description
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;