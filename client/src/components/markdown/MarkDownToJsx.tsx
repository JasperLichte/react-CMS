import React, { useRef, useEffect, useState } from 'react'
import Markdown from 'markdown-to-jsx'
import GithubUser from './extra_components/vendor/github/GithubUser'
import GoogleMap from './extra_components/vendor/google/maps/GoogleMap'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css'
import MySocialMedia from './extra_components/me/MySocialMedia'

interface Props {
    md: string;
    onHeadingsChange?: (headings :(NodeListOf<HTMLElement>|[])) => any,
    onActiveHeadingsChange?: (headings: string[]) => any,
}

const MarkDownToJsx = ({md, onHeadingsChange, onActiveHeadingsChange}: Props) => {
    const rootRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    const [headings, setHeadings] = useState<NodeListOf<HTMLElement>|[]>([]);
    const [activeHeadings, setActiveHeadings] = useState<string[]>([]);

    useEffect(() => {
      rootRef?.current?.querySelectorAll('pre code').forEach((block) => {
        hljs.highlightBlock(block);
      });

      const updatedHeadings: NodeListOf<HTMLElement>|[] = rootRef?.current?.querySelectorAll('h1, h2, h3, h4, h5, h6');
      setHeadings(updatedHeadings);
      updatedHeadings.forEach(h => {
          if (h.innerText.includes(' [hidden]')) {
            h.innerText = h.innerText.replace(' [hidden]', '');
            h.id = h.id.replace('-hidden', '');
            h.classList.add('hidden');
          }
      });

    }, [md, rootRef, setHeadings]);

    useEffect(() => {
        if (onHeadingsChange) {
            onHeadingsChange(headings);
        }
        const headingsObserver = new IntersectionObserver((entries) => {
            setActiveHeadings(entries.map(e => e.target.id));
        });
        headings.forEach((h: HTMLElement) => headingsObserver.observe(h));
    }, [headings, onHeadingsChange]);

    useEffect(() => {
        if (onActiveHeadingsChange) {
            onActiveHeadingsChange(activeHeadings);
        }
    }, [activeHeadings, onActiveHeadingsChange])

    return (
        <div className="markdown" ref={rootRef}>
            <Markdown
                options={{
                    overrides: {
                        'github-user': GithubUser,
                        'map': GoogleMap,
                        'my-social-media': MySocialMedia,
                    }
                }}
            >{md}</Markdown>
        </div>);
}

export default MarkDownToJsx

// <my-social-media></my-social-media>
