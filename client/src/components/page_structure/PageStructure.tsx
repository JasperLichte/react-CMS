import React from 'react'
import Header from './modules/header/Header';
import Footer from './modules/footer/Footer';
import Content from './modules/content/Content';
import './PageStructure.scss';

const PageStructure: React.FC = ({children}) => (
    <div className="page-structure">
        <Header></Header>
        <Content>
            {children}
        </Content>
        <Footer></Footer>
    </div>);

export default PageStructure;
