import React from 'react'
import PageStructure from '../../../page_structure/PageStructure'
import './EditPostPage.scss'
import { Redirect } from 'react-router-dom'
import useIsAdmin from '../../../../hooks/auth/useIsAdmin'
import EditPostPageContent from './EditPostPageContent'

const EditPostPage: React.FC = () => {
    const isAllowed = useIsAdmin();

    if (!isAllowed) {
        return <Redirect to="/auth/login" />
    }

    return (
        <PageStructure>
            <EditPostPageContent />
        </PageStructure>
    )
}

export default EditPostPage
