import React from 'react';
import { useSelector } from 'react-redux';
import { configSelector } from '../../selectors/selectors';

const Blog = () => {
  const config = useSelector(configSelector);

  return (<h1>Blog</h1>);
}

export default Blog;
