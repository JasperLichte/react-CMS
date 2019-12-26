import React from 'react'
import Header from './modules/header/Header';
import Footer from './modules/footer/Footer';
import Content from './modules/content/Content';

const PageStructure: React.FC = ({children}) => (<>
    <Header></Header>
    <Content>
        {children}
    </Content>
    <Footer></Footer>
</>);

export default PageStructure;
