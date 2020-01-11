import React from 'react'
import MarkDownToJsx from '../../markdown/MarkDownToJsx'
import './AboutMeContent.scss'

interface Props {
    content: string,
    onHeadingsChange: (headings :(NodeListOf<HTMLElement>|[])) => any,
}

const AboutMeContent = ({onHeadingsChange, content}: Props) => {
    return (
        <div className="about-me-content">
            <MarkDownToJsx md={content} onHeadingsChange={onHeadingsChange} />
        </div>
    )
}

export default AboutMeContent
