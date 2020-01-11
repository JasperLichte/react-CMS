import React, { useEffect } from 'react'
import Header from './modules/header/Header';
import Footer from './modules/footer/Footer';
import Content from './modules/content/Content';
import './PageStructure.scss';
import PageType from '../pages/PageType';
import Theme, { defaultTheme } from './Theme';
import { useSelector } from 'react-redux';
import { meSelector } from '../../selectors/selectors';

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
    const me = useSelector(meSelector);

    if (options) {
        options.theme = options.theme || defaultTheme;
    }

    useEffect(() => {
        const title = (pageType => {
            switch(pageType) {
                case PageType.Landing: return 'Start';
                case PageType.BlogLanding: return 'Blog';
                case PageType.Login: return 'Login';
                case PageType.Register: return 'Register';
                case PageType.NewBlogPost: return 'New blog post';
                case PageType.EditBlogPost: return 'Edit blog post';
                case PageType.About: return 'About';
            }
            return '';
        })(pageType);
        
        if (title) {
            document.title = `${me?.getUser()?.getName()} | ${title}`;
        } else {
            document.title = me?.getUser()?.getName() || document.title;
        }
    }, [pageType, me]);

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
