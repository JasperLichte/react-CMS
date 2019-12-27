import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPostMenuTile.scss';
import BlogPost from '../../../../models/blog/BlogPost';

interface BlogPostMenuTileProp {
  post: BlogPost,
}

const BlogPostMenuTile = ({post}: BlogPostMenuTileProp) => (
  <Link
    className="blog-post-menu-tile"
    style={{backgroundColor: randomColor(180)}}
    to={`/blog/${post.getId()}`}>
  {post.getTitle()}</Link>);

export default BlogPostMenuTile;

function randomColor(brightness: number) {
  function randomChannel(brightness: number) {
    var r = 255 - brightness;
    var n = 0|((Math.random() * r) + brightness);
    var s = n.toString(16);
    return (s.length === 1) ? '0' + s : s;
  }
  return '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
}
