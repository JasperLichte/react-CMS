import React, { useState } from 'react'
import BlogPostInputs from '../inputs/BlogPostInputs'
import BlogPostPreview from '../preview/BlogPostPreview'
import Api from '../../../../api/Api';
import { useHistory } from 'react-router-dom';

const NewPostPageContent = () => {
    const [ content, setContent ] = useState('');
    const [ title, setTitle ] = useState('');
    const history = useHistory();

    const save = async (title: string, md: string) => {
        Api.post('blog/new', {
            title, content: md
        })
        .then(r => r.json())
        .then(ctx => {
            if (ctx.success && ctx.postId) {
                history.push(`/blog/${ctx.postId}`);
            }
        })
    };

    return (
        <div className="new-post">
            <BlogPostInputs
                setContent={setContent}
                setTitle={setTitle}
                onSave={() => save(title, content)}
            />
            <BlogPostPreview md={content} />
        </div>)
}

export default NewPostPageContent
