import React from 'react'
import Header from './modules/header/Header';
import Footer from './modules/footer/Footer';
import Content from './modules/content/Content';
import './PageStructure.scss';
import PageType from '../pages/PageType';
import Theme, { defaultTheme } from './Theme';

export interface Options {
    withoutHeading?: boolean,
    theme?: Theme,
}

interface Props {
    children: React.ReactNode,
    options?: Options,
    pageType: PageType,
    className?: string,
}

const PageStructure = ({children, options, pageType, className}: Props) => {
    if (options) {
        options.theme = options.theme || defaultTheme;
    }

    return (
        <div className="page-structure">
            <Header options={options} pageType={pageType}></Header>
            <Content className={className}>
                {children}
            </Content>
            <Footer options={options}></Footer>
        </div>);
};

export default PageStructure;
