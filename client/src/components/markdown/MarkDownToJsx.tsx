import React, { useRef, useEffect, useState } from 'react'
import Markdown from 'markdown-to-jsx'
import GithubUser from './extra_components/vendor/github/GithubUser'
import GoogleMap from './extra_components/vendor/google/maps/GoogleMap'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css'

interface Props {
    md: string;
    onHeadingsChange?: (headings :(NodeListOf<HTMLElement>|[])) => any,
}

const MarkDownToJsx = ({md, onHeadingsChange}: Props) => {
    const rootRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    const [headings, setHeadings] = useState<NodeListOf<HTMLElement>|[]>([]);

    useEffect(() => {
      rootRef?.current?.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
      });

      setHeadings(rootRef?.current?.querySelectorAll('h1, h2, h3, h4, h5, h6'))
    }, [md, rootRef, setHeadings]);

    useEffect(() => {
        if (onHeadingsChange) {
            onHeadingsChange(headings);
        }
    }, [headings, onHeadingsChange])

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
