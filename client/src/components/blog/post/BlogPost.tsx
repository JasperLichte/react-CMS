import React from 'react';
import Markdown from 'markdown-to-jsx';
import { useParams } from 'react-router-dom';
import PageStructure from '../../page_structure/PageStructure';
import useBlogPost from '../../../hooks/blog/useBlogPost';
import Err404 from '../../placeholder/errors/404/Err404';
import LoadingSpinner from '../../placeholder/LoadingSpinner';

const BlogPost = () => {
  const { id } = useParams();
  const [ loading, post ] = useBlogPost(parseInt(id || ''));

  return (
    <PageStructure>
      {
        loading
          ? <LoadingSpinner />
          : post === null
            ? <Err404 />
            : <Markdown className="markdown">{post.getContent()}</Markdown>
      }
    </PageStructure>
  );
}

export default BlogPost;
