import React from 'react'
import './AboutMeNav.scss'

interface Props {
    headings: NodeListOf<HTMLElement>|[],
}

const AboutMeNav = ({headings}: Props) => {
    const levels = Array.from(headings).map(h => parseInt(h.tagName.replace('H', '')));

    return (
        <div className="about-me-nav" data-item-count={headings.length}>
            <ul>
                {Array.from(headings).map((h, i) => (
                    <li key={i} data-level={levels[i]}>
                        <a href={`#${h.id}`}>{h.innerText}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AboutMeNav
