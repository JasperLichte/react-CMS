import React from 'react';
import PageStructure from '../../page_structure/PageStructure';
import BlogPostsTileMenu from './posts_tile_menu/BlogPostsTileMenu';
import useAllBlogPosts from '../../../hooks/blog/useAllBlogPosts';
import FloatingButton from '../../ui_elements/FloatingButton';
import useIsAdmin from '../../../hooks/auth/useIsAdmin';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PageType from '../../pages/PageType';
import LoadingSpinner from '../../placeholder/LoadingSpinner';

const BlogLandingPage = () => {
  const [loading, allPosts] = useAllBlogPosts();
  const isAdmin = useIsAdmin();
  const history = useHistory();

  return (
    <PageStructure
      pageType={PageType.BlogLanding}
    >
      {loading
        ? <LoadingSpinner />
        : !allPosts.length
          ? <p>no posts</p>
          : <>
              <BlogPostsTileMenu posts={allPosts} />
              {isAdmin && <FloatingButton
                onClick={() => history.push('/blog/new')}  
              >
                <FontAwesomeIcon icon={faPlus} />
              </FloatingButton>}
            </>}
    </PageStructure>
  );
}

export default BlogLandingPage;
