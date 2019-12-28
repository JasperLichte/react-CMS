import React from 'react'
import './Sidemenu.scss'

interface Props {
    isOpen: boolean,
    close: VoidFunction,
}

const SideMenu = ({isOpen, close}: Props) => {
    return (
        <div className={`side-menu ${isOpen ? 'open' : 'closed'}`}>
            <button
                onClick={close}
                className="menu-close-btn"
            ><span/><span/></button>
        </div>
    )
}

export default SideMenu
