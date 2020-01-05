import React from 'react'
import PageStructure from '../page_structure/PageStructure'
import MarkDownToJsx from '../markdown/MarkDownToJsx'
import PageType from '../pages/PageType';
import './AboutMePage.scss';

const AboutMePage = () => {
    return (
    <PageStructure
        pageType={PageType.About}
        options={{withoutHeading: true}}
    >
        <MarkDownToJsx md={''} />
    </PageStructure>)
}

export default AboutMePage
