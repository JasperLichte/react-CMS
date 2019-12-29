import React, { useRef, useEffect } from 'react'
import Markdown from 'markdown-to-jsx'
import GithubUser from './extra_components/vendor/github/GithubUser'
import GoogleMap from './extra_components/vendor/google/maps/GoogleMap'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css'

interface Props {
    md: string;
}

const MarkDownToJsx = ({md}: Props) => {
    const rootRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
      rootRef?.current?.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
      });
    }, [md, rootRef]);

    return (
        <div className="markdown" ref={rootRef}>
            <Markdown
                options={{
                    overrides: {
                        'github-user': GithubUser,
                        'map': GoogleMap,
                    }
                }}
            >{md}</Markdown>
        </div>);
}

export default MarkDownToJsx
