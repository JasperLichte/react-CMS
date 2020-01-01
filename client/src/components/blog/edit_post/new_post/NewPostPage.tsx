import React from 'react'
import PageStructure from '../../../page_structure/PageStructure'
import './NewPostPage.scss'
import useIsAdmin from '../../../../hooks/auth/useIsAdmin'
import { Redirect } from 'react-router-dom'
import NewPostPageContent from './NewPostPageContent'

const NewPostPage: React.FC = () => {
    const isAllowed = useIsAdmin();

    if (!isAllowed) {
        return <Redirect to="/auth/login" />
    }

    return (
        <PageStructure>
            <NewPostPageContent />
        </PageStructure>
    )
}

export default NewPostPage
