import React from 'react';
import {dumpLogs} from './Utils';
// import './BlogCard.css';
import classes from './BlogCard.module.css';

const BlogCard=(properties)=>{
  dumpLogs(properties);
  
    return(
      <div className={classes.NewBlogCard}>
        <h3>{properties.title}</h3>
        <p>{properties.description}</p>
      </div>
    )

}
export default BlogCard;