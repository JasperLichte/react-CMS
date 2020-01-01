import React from 'react'
import './Sidemenu.scss'
import { useSelector } from 'react-redux'
import { userSelector } from '../../../../selectors/selectors';
import { Link } from 'react-router-dom';

interface Props {
    isOpen: boolean,
    close: VoidFunction,
}

const SideMenu = ({isOpen, close}: Props) => {
    const user = useSelector(userSelector);

    return (
        <div className={`side-menu ${isOpen ? 'open' : 'closed'}`}>
            <button
                onClick={close}
                className="menu-close-btn"
            ><span/><span/></button>
            <div className="links">
                {user
                    ? <Link to="/auth/logout">Logout</Link>
                    : <Link to="/auth/login">Login</Link>}
            </div>
        </div>
    )
}

export default SideMenu
