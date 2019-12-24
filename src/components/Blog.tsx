import React from 'react';
import Markdown from 'markdown-to-jsx';
import useMdFile from '../hooks/useMdFile';
import Config from '../models/Config';

interface BlogProps {
  config: Config,
}

const Blog = ({config}: BlogProps) => {
  const md = useMdFile(`${config.markdownFilesRoot()}test.md`);

  return (<Markdown>{md}</Markdown>);
}

export default Blog;
