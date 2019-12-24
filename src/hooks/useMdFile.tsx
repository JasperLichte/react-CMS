import { useState, useEffect } from 'react';

const useMdFile = (path: string): string => {
    const [text, setText] = useState('');

    useEffect(() => {
      fetch(`${path}?v=${Math.floor(Math.random() * 1000)}`)
      .then((r) => r.text())
      .then(setText)
      .catch(_ => setText(''))
    }, [path])

    return text;
}

export default useMdFile;
