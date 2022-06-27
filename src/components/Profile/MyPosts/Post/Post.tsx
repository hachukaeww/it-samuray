import React from 'react';
import s from './Post.module.css';
type PostPropsType = {
  message: string
  likesCount : string
}
const Post = (props:PostPropsType) => {

  return (
    <div className={s.item}>
      <div>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgxfDAMqK3mhyikTk6uhY8Bn3HdpjkMvuzLQ&usqp=CAU' />
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
      </div>
    </div>
  )
}

export default Post;