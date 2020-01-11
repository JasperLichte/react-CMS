import React from 'react'
import './Content.scss';

interface Props {
    className?: string,
    children: React.ReactNode,
}

const Content = ({children, className}: Props) => {
    return (
        <div className={`content ${className || ''}`}>
            {children}
        </div>
    )
}

export default Content
