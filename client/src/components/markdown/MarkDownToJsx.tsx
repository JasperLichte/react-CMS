import React from 'react'
import Markdown from 'markdown-to-jsx'
import GithubUser from './extra_components/github/GithubUser'

interface Props {
    md: string;
}


const MarkDownToJsx = ({md}: Props) => (
    <Markdown
        className="markdown"
        options={{
            overrides: {
                'github-user': GithubUser,
            }
        }}
    >{md}</Markdown>)

export default MarkDownToJsx
