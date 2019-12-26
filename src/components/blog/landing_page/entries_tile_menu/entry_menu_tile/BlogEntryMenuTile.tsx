import React from 'react';
import { Link } from 'react-router-dom';
import './BlogEntryMenuTile.scss';

interface BlogEntryMenuTileProps {
  entryKey: string,
}

const BlogEntryMenuTile = ({entryKey}: BlogEntryMenuTileProps) => (
  <Link
    className="blog-entry-menu-tile"
    style={{backgroundColor: randomColor(180)}}
    to={`/blog/${entryKey}`}>
  {entryKey}</Link>);

export default BlogEntryMenuTile

function randomColor(brightness: number) {
  function randomChannel(brightness: number) {
    var r = 255 - brightness;
    var n = 0|((Math.random() * r) + brightness);
    var s = n.toString(16);
    return (s.length == 1) ? '0' + s : s;
  }
  return '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
}
