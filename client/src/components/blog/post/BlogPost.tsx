import React from 'react';
import Markdown from 'markdown-to-jsx';
import { useParams } from 'react-router-dom';
import PageStructure from '../../page_structure/PageStructure';
import useBlogPost from '../../../hooks/blog/useBlogPost';

const BlogPost = () => {
  const { id } = useParams();
  const [ loading, post ] = useBlogPost(parseInt(id || ''));

  return (
    <PageStructure>
      {
        loading
          ? <p>loading...</p>
          : post === null
            ? <p>error</p>
            : <Markdown className="markdown">{post.getContent()}</Markdown>
      }
    </PageStructure>
  );
}

export default BlogPost;
