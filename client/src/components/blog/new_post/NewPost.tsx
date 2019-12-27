import React, { useState } from 'react'
import PageStructure from '../../page_structure/PageStructure';
import NewBlogPostInputs from './inputs/NewBlogPostInputs';
import NewBlogPostPreview from './preview/NewBlogPostPreview';
import './NewPost.scss';

const NewPost = () => {
    const [ input, setInput ] = useState('');

    return (
        <PageStructure>
            <div className="new-post">
                <NewBlogPostInputs setInput={setInput} />
                <NewBlogPostPreview md={input} />
            </div>
        </PageStructure>
    )
}

export default NewPost
