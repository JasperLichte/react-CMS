import React from 'react'
import PageStructure from '../../../page_structure/PageStructure'
import Err404 from './Err404'
import PageType from '../../../pages/PageType'

const Err404Page = () => (
    <PageStructure
        pageType={PageType.Error}
    >
       <Err404 />
    </PageStructure>
)

export default Err404Page
