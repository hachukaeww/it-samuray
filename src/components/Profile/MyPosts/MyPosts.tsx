import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props:any) => {
  return (
    <div>
      My posts
      <div>
        <div><textarea></textarea></div>
        <div> <button>Add post</button> <button>remove post</button> </div>
       
      </div>
      <div className={s.posts}>
        <Post message='Hi, how are you?' likesCount='0'/>
        <Post message="It's my first post" likesCount='23' />
      </div>
    </div>
  )
}

export default MyPosts;