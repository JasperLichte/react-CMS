import React from 'react'
import './SideMenu.scss'
import { useSelector } from 'react-redux'
import { userSelector } from '../../../../selectors/selectors';
import { Link } from 'react-router-dom';
import PageType from '../../../pages/PageType';
import Theme from '../../Theme';

interface Props {
    isOpen: boolean,
    close: VoidFunction,
    pageType: PageType,
    theme?: Theme,
}

const SideMenu = ({isOpen, close, pageType, theme}: Props) => {
    const user = useSelector(userSelector);

    return (
        <div className={`side-menu ${isOpen ? 'open' : 'closed'}`} data-theme={theme}>
            <button
                onClick={close}
                className="menu-close-btn"
            ><span/><span/></button>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about" data-current={pageType === PageType.About}>About me</Link>
                <Link to="/blog" data-current={pageType === PageType.BlogLanding}>Blog</Link>
                {user
                    ? <Link to="/auth/logout">Logout</Link>
                    : <Link to="/auth/login">Login</Link>}
            </div>
        </div>
    )
}

export default SideMenu
