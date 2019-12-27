import React from 'react'
import BlogPost from '../../../../models/blog/BlogPost';
import './BlogPostsTileMenu.scss';
import BlogPostMenuTile from '../../post/post_menu_tile/BlogPostMenuTile';

interface BlogPostsTileMenuProps {
  posts: BlogPost[],
}

const BlogPostsTileMenu = ({posts}: BlogPostsTileMenuProps) => (
<div className="blog-posts-tile-menu">
  {posts.map(p => (<BlogPostMenuTile post={p} key={p.getId()} />))}
</div>);

export default BlogPostsTileMenu;
