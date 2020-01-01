import React from 'react';
import PageStructure from '../../page_structure/PageStructure';
import BlogPostsTileMenu from './posts_tile_menu/BlogPostsTileMenu';
import useAllBlogPosts from '../../../hooks/blog/useAllBlogPosts';
import FloatingButton from '../../ui_elements/FloatingButton';
import useIsAdmin from '../../../hooks/auth/useIsAdmin';
import { useHistory } from 'react-router-dom';

const BlogLandingPage = () => {
  const [loading, allPosts] = useAllBlogPosts();
  const isAdmin = useIsAdmin();
  const history = useHistory();

  return (
    <PageStructure>
      {loading
        ? <p>loading...</p>
        : !allPosts.length
          ? <p>no posts</p>
          : <>
              <BlogPostsTileMenu posts={allPosts} />
              {isAdmin && <FloatingButton
                onClick={() => history.push('/blog/new')}  
              >New</FloatingButton>}
            </>}
    </PageStructure>
  );
}

export default BlogLandingPage;
