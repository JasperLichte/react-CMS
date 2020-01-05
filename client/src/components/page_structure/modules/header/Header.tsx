import React, { useState } from 'react'
import SideMenu from '../side_menu/SideMenu'
import './Header.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { meSelector } from '../../../../selectors/selectors';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const me = useSelector(meSelector);

    return (
        <header className="header">
            <div className="content-wrapper">
                <button
                    className="menu-open-btn"
                    disabled={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                ><span/><span/><span/>
                </button>
                <h1><Link to="/">{me?.getUser()?.getName()}</Link></h1>
            </div>
            <SideMenu isOpen={menuOpen} close={() => setMenuOpen(false)} />
        </header>
    )
}

export default Header
