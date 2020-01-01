import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../../../placeholder/LoadingSpinner'
import BlogPostInputs from '../inputs/BlogPostInputs'
import BlogPostPreview from '../preview/BlogPostPreview'
import { useParams, useHistory } from 'react-router-dom'
import useBlogPost from '../../../../hooks/blog/useBlogPost'
import Api from '../../../../api/Api'

const EditPostPageContent = () => {
    const { id } = useParams();
    const [ loading, post ] = useBlogPost(parseInt(id || ''));
    const [ title, setTitle ] = useState('');
    const [ content, setContent ] = useState('');
    const history = useHistory();

    useEffect(() => {
        if (!loading && post !== null) {
            setContent(post.getContent());
            setTitle(post.getTitle());
        }
    }, [loading, post]);

    const save = async (title: string, md: string) => {
        Api.post(`blog/${id}/edit`, {
            title, content: md
        })
        .then(r => r.json())
        .then(ctx => {
            if (ctx.success) {
                history.push(`/blog/${id}`);
            }
        })
    };

    return !loading && post
        ? (<div className="edit-post">
            <BlogPostInputs
                setTitle={setTitle}
                titleValue={title}
                setContent={setContent}
                contentValue={content}
                onSave={() => save(title, content)}
            />
            <BlogPostPreview md={content} />
        </div>)
        : <LoadingSpinner />
}

export default EditPostPageContent
