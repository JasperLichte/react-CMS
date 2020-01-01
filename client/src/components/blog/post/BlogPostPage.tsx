import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PageStructure from '../../page_structure/PageStructure';
import useBlogPost from '../../../hooks/blog/useBlogPost';
import Err404 from '../../placeholder/errors/404/Err404';
import LoadingSpinner from '../../placeholder/LoadingSpinner';
import MarkDownToJsx from '../../markdown/MarkDownToJsx';
import useIsAdmin from '../../../hooks/auth/useIsAdmin';
import FloatingButton from '../../ui_elements/FloatingButton';

const BlogPostPage = () => {
  const isAdmin = useIsAdmin();
  const { id } = useParams();
  const [ loading, post ] = useBlogPost(parseInt(id || ''));
  const history = useHistory();

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
            : <>
              <MarkDownToJsx md={post.getContent()} />
              {isAdmin && <FloatingButton
                onClick={() => history.push(`/blog/${id}/edit`)}  
              >Edit</FloatingButton>}
            </>
      }
    </PageStructure>
  );
}

export default BlogPostPage;
