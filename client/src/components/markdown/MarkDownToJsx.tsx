import React from 'react'
import Markdown from 'markdown-to-jsx'
import GithubUser from './extra_components/github/GithubUser'

interface Props {
    md: string;
}


const MarkDownToJsx = ({md}: Props) => (
<div className="markdown">
    <Markdown
        options={{
            overrides: {
                'github-user': GithubUser,
            }
        }}
    >{md}</Markdown>
</div>)

export default MarkDownToJsx
