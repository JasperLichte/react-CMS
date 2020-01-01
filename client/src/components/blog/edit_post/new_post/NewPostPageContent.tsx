import React, { useState } from 'react'
import BlogPostInputs from '../inputs/BlogPostInputs'
import BlogPostPreview from '../preview/BlogPostPreview'

const NewPostPageContent = () => {
    const [ content, setContent ] = useState('');
    const [, setTitle ] = useState('');

    const save = () => {

    }

    return (
        <div className="new-post">
            <BlogPostInputs
                setContent={setContent}
                setTitle={setTitle}
                onSave={save}
            />
            <BlogPostPreview md={content} />
        </div>)
}

export default NewPostPageContent
