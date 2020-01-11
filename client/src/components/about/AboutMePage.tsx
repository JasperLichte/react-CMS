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
    const [headings, setHeadings] = useState<NodeListOf<HTMLElement>|[]>([]);

    return (
        <PageStructure
            pageType={PageType.About}
            options={{withoutHeading: false, theme: Theme.bright}}
            className="about-me"
        >{
            loading
                ? <LoadingSpinner />
                : <>
                    <AboutMeNav headings={headings} />
                    <AboutMeContent content={content} onHeadingsChange={setHeadings} />
                </>
        }
        </PageStructure>)
}

export default AboutMePage
