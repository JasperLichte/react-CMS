import React, { useRef } from 'react'
import './NewBlogPostPreview.scss'
import useMeasure from '../../../../hooks/dom/useMeasure';
import MarkDownToJsx from '../../../markdown/MarkDownToJsx';

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
            <MarkDownToJsx md={md} />
        </div>
    )
}

export default NewBlogPostPreview
