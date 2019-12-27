import React from 'react';
import PageStructure from '../../page_structure/PageStructure';
import BlogPostsTileMenu from './posts_tile_menu/BlogPostsTileMenu';
import useAllBlogPosts from '../../../hooks/blog/useAllBlogPosts';

const BlogLandingPage = () => {
  const [loading, allPosts] = useAllBlogPosts();

  return (
    <PageStructure>
      {loading
        ? <p>loading...</p>
        : allPosts.length
          ? <BlogPostsTileMenu posts={allPosts} />
          : <p>no posts</p>}
    </PageStructure>
  );
}

export default BlogLandingPage;
