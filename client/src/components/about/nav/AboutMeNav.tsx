import React from 'react'
import './AboutMeNav.scss'

interface Props {
    headings: NodeListOf<HTMLElement>|[],
    activeHeadings: string[],
}

const AboutMeNav = ({headings, activeHeadings}: Props) => {
    return (
        <div className="about-me-nav" data-item-count={headings.length}>
            <ul>
                {Array.from(headings).map((h, i) => (
                    <li
                        key={`${h.id}-${i}`}
                        data-level={parseInt(h.tagName.replace('H', ''))}
                        data-active={(activeHeadings.includes(h.id)) ? 1 : 0}
                    >
                        <a href={`#${h.id}`}>{h.innerText}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AboutMeNav
