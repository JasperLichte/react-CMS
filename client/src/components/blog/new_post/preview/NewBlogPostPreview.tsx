import React, { useRef } from 'react'
import Markdown from 'markdown-to-jsx'
import './NewBlogPostPreview.scss'
import useMeasure from '../../../../hooks/dom/useMeasure';

interface Props {
    md: string;
};

const NewBlogPostPreview = ({md}: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const measure = useMeasure(ref);

    return (
        <div
            className="new-blog-post-preview"
            ref={ref}
            style={{maxHeight: (measure ? `${measure.height}px` : undefined)}}
        >
            <Markdown className="markdown">{md}</Markdown>
        </div>
    )
}

export default NewBlogPostPreview
