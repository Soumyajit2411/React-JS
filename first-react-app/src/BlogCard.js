// import React,{Component} from 'react';
//import {dumpLogs} from './Utils';
// import './BlogCard.css';
import classes from './BlogCard.module.css';

const BlogCard =(props)=>{
  // state={
  //   likeCount:0
  // }

  // onLikeBtnClick=()=>{
  //   this.setState((prevState,prevProp)=>{
  //     return{likeCount : prevState.LikeCount+1}
  //   });
  // }

  console.log('BlogCard Rendered');

  return(
    <div className={classes.NewBlogCard}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>Like Count:<span className={classes.LikeCount}>
      {props.LikeCount}</span></p>
      <button onClick={props.onLikeBtnClick}>Like</button>
    </div>
  )


}
export default BlogCard;