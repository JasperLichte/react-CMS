import React from 'react'
import Articles from '../../../../models/blog/Articles';
import BlogEntryMenuTile from './entry_menu_tile/BlogEntryMenuTile';
import './BlogEntriesTileMenu.scss';

interface BlogEntriesTileMenuProps {
    articles: Articles,
}

const BlogEntriesTileMenu = ({articles}: BlogEntriesTileMenuProps) => (
<div className="blog-entries-tile-menu">
  {Object.keys(articles).map(entryKey => <BlogEntryMenuTile key={entryKey} entryKey={entryKey} />)}
</div>);

export default BlogEntriesTileMenu;
