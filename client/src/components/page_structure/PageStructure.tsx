import React from 'react'
import Header from './modules/header/Header';
import Footer from './modules/footer/Footer';
import Content from './modules/content/Content';
import './PageStructure.scss';
import PageType from '../pages/PageType';

export interface Options {
    withoutHeading?: boolean
}

interface Props {
    children: React.ReactNode,
    options?: Options,
    pageType: PageType,
}

const PageStructure = ({children, options, pageType}: Props) => (
    <div className="page-structure">
        <Header options={options} pageType={pageType}></Header>
        <Content>
            {children}
        </Content>
        <Footer></Footer>
    </div>);

export default PageStructure;
