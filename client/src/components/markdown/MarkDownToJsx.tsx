import React from 'react'
import Markdown from 'markdown-to-jsx'
import GithubUser from './extra_components/vendor/github/GithubUser'
import GoogleMap from './extra_components/vendor/google/maps/GoogleMap'

interface Props {
    md: string;
}

const MarkDownToJsx = ({md}: Props) => (
<div className="markdown">
    <Markdown
        options={{
            overrides: {
                'github-user': GithubUser,
                'map': GoogleMap,
            }
        }}
    >{md}</Markdown>
</div>)

export default MarkDownToJsx
