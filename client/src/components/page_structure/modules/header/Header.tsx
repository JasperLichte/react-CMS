import React, { useState } from 'react'
import SideMenu from '../side_menu/SideMenu'
import './Header.scss';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="content-wrapper">
                <button
                    className="menu-open-btn"
                    disabled={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                ><span/><span/><span/>
                </button>
            </div>
            <SideMenu isOpen={menuOpen} close={() => setMenuOpen(false)} />
        </header>
    )
}

export default Header
