import React from 'react'
import './BlogPostInputs.scss'
import FloatingButton from '../../../ui_elements/FloatingButton'

interface Props {
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    titleValue?: string,
    setContent: React.Dispatch<React.SetStateAction<string>>,
    contentValue?: string,
    onSave: VoidFunction
}

const NewBlogPostInputs = ({setTitle, titleValue, setContent, contentValue, onSave}: Props) => {
    return (<>
        <div className="new-blog-post-inputs">
            <div className="title-wrapper">
                <span>Title:</span>
                <input
                    className="title"
                    placeholder="The title goes here"
                    onChange={e => setTitle(e.target.value)}
                    value={titleValue}
                />
            </div>
            <textarea
                className="content"
                placeholder="Type your markdown here"
                onChange={e => setContent(e.target.value)}
                value={contentValue}
            ></textarea>
        </div>
        <FloatingButton
            onClick={onSave}
        >Save</FloatingButton>
    </>)
}

export default NewBlogPostInputs
