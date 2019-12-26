import React from 'react';
import Markdown from 'markdown-to-jsx';
import useMdFile from '../../../hooks/markdown/useMdFile';
import { useSelector } from 'react-redux';
import { configSelector } from '../../../selectors/selectors';
import { useParams } from 'react-router-dom';
import Config from '../../../models/config/Config';
import PageStructure from '../../page_structure/PageStructure';

const BlogEntry = () => {
  const config: Config = useSelector(configSelector);
  const { date } = useParams();
  const path = config.articlePath(date || '');
  const md = useMdFile(path);

  return (
    <PageStructure>
      {md
        ? <Markdown>{md}</Markdown> 
        : (path
          ? <p>loading...</p>
          : <p>404</p>)}
    </PageStructure>
  );
}

export default BlogEntry;
