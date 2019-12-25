import React from 'react';
import Markdown from 'markdown-to-jsx';
import useMdFile from '../../hooks/markdown/useMdFile';
import { useSelector } from 'react-redux';
import { configSelector } from '../../selectors/selectors';
import { useParams } from 'react-router-dom';
import Config from '../../models/config/Config';

const BlogEntry = () => {
  const config: Config = useSelector(configSelector);
  const { date } = useParams();
  const md = useMdFile(config.articlePath(date || ''));

  return (<Markdown>{md}</Markdown>);
}

export default BlogEntry;
