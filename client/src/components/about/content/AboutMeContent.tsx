import React from 'react'
import MarkDownToJsx from '../../markdown/MarkDownToJsx'
import './AboutMeContent.scss'

interface Props {
    content: string,
    onHeadingsChange: (headings :(NodeListOf<HTMLElement>|[])) => any,
    onActiveHeadingsChange?: (headings: string[]) => any,
}

const AboutMeContent = ({onHeadingsChange, content, onActiveHeadingsChange}: Props) => {
    return (
        <div className="about-me-content">
            <MarkDownToJsx
                md={content}
                onHeadingsChange={onHeadingsChange}
                onActiveHeadingsChange={onActiveHeadingsChange}
            />
        </div>
    )
}

export default AboutMeContent
