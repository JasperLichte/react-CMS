import React from 'react'
import './Footer.scss';
import { Options } from '../../PageStructure';

interface Props {
    options?: Options,
}

const Footer = ({options}: Props) => {
    return (
        <footer className="footer" data-theme={options?.theme || ''}>
            <div className="content-wrapper">
                <p>
                    Made possible with <strong>
                        <a href="https://github.com/JasperLichte/react_cms">React CMS</a>
                    </strong> by Jasper Lichte
                </p>
            </div>
        </footer>
    )
}

export default Footer
