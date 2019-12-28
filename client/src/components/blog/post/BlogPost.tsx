import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageStructure from '../../page_structure/PageStructure';
import useBlogPost from '../../../hooks/blog/useBlogPost';
import Err404 from '../../placeholder/errors/404/Err404';
import LoadingSpinner from '../../placeholder/LoadingSpinner';
import MarkDownToJsx from '../../markdown/MarkDownToJsx';

const BlogPost = () => {
  const { id } = useParams();
  const [ loading, post ] = useBlogPost(parseInt(id || ''));

  useEffect(() => {
    if (post) {
      document.title = post.getTitle();
    }
  }, [post]);

  return (
    <PageStructure>
      {
        loading
          ? <LoadingSpinner />
          : post === null
            ? <Err404 />
            : <MarkDownToJsx md={post.getContent()} />
      }
    </PageStructure>
  );
}

export default BlogPost;
