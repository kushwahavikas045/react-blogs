import React from 'react'
import { Link } from 'react-router-dom';
const Headers = () => {
    return (
        <div className="ui secondary  menu" style={{width:'90%', maxWidth:'1200px' ,margin:'0 auto'}}>
  <Link to="/" className="active item">
    Tech Blogs
  </Link>
  <Link to="/" className="item">
    Blogs
  </Link>
  <Link to="/posts" className="item">
    Posts
  </Link>
  <Link to="/create-post" target="_blank" className="item " style={{color:'red'}}>create post</Link>
</div>
    )
}

export default Headers;
