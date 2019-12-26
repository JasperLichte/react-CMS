import React from 'react';
import Config from '../../../models/config/Config';
import { useSelector } from 'react-redux';
import { configSelector } from '../../../selectors/selectors';
import PageStructure from '../../page_structure/PageStructure';
import BlogEntriesTileMenu from './entries_tile_menu/BlogEntriesTileMenu';

const BlogLandingPage = () => {
  const config: Config = useSelector(configSelector);

  return (
    <PageStructure>
      <BlogEntriesTileMenu articles={config.articlesPaths()} />
    </PageStructure>
  );
}

export default BlogLandingPage;
