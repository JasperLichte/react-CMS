import React, { useState, useEffect } from 'react'
import PageStructure from '../page_structure/PageStructure'
import PageType from '../pages/PageType';
import './AboutMePage.scss';
import AboutMeNav from './nav/AboutMeNav';
import AboutMeContent from './content/AboutMeContent';
import Theme from '../page_structure/Theme';
import Api from '../../api/Api';
import LoadingSpinner from '../placeholder/LoadingSpinner';

const AboutMePage = () => {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [headings, setHeadings] = useState<NodeListOf<HTMLElement>|[]>([]);
    const [activeHeadings, setActiveHeadings] = useState<string[]>([]);

    useEffect(() => {
        Api.get('about/me')
            .then(r => r.json())
            .then(r => {
                if (r.content) {
                    setContent(r.content);
                }
                setLoading(false);
            });
    }, [setContent]);

    return (
        <PageStructure
            pageType={PageType.About}
            options={{withoutHeading: true, theme: Theme.dark}}
            className="about-me"
        >{
            loading
                ? <LoadingSpinner />
                : <>
                    <AboutMeNav
                        headings={headings}
                        activeHeadings={activeHeadings}
                    />
                    <AboutMeContent
                        content={content}
                        onHeadingsChange={setHeadings}
                        onActiveHeadingsChange={setActiveHeadings}
                    />
                </>
        }
        </PageStructure>)
}

export default AboutMePage
