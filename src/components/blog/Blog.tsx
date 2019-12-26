import React from 'react';
import Config from '../../models/config/Config';
import { useSelector } from 'react-redux';
import { configSelector } from '../../selectors/selectors';
import { Link } from 'react-router-dom';
import PageStructure from '../page_structure/PageStructure';

const Blog = () => {
  const config: Config = useSelector(configSelector);

  return (
    <PageStructure>
      {Object.keys(config.articlesPaths()).map(p => (< div key={`wrapper-${p}`}>
        <Link to={`/blog/${p}`} key={p} style={{display: 'block'}} >{p}</Link>
      </div>))}
    </PageStructure>
  );
}

export default Blog;
