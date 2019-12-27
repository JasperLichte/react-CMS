import React from 'react'
import './NewBlogPostInputs.scss'

interface Props {
    setInput: React.Dispatch<React.SetStateAction<string>>
}

const NewBlogPostInputs = ({setInput}: Props) => {
    return (
        <div className="new-blog-post-inputs">
            <textarea
                onChange={e => setInput(e.target.value)}
                placeholder="Type your markdown here"
            ></textarea>
        </div>
    )
}

export default NewBlogPostInputs
