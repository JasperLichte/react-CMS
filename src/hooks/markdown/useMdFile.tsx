import { useState, useEffect } from 'react';

const useMdFile = (filePath: string): string => {
    const [text, setText] = useState('');

    useEffect(() => {
      fetch(`${filePath}?v=${Math.floor(Math.random() * 1000)}`)
      .then((r) => r.text())
      .then(setText)
      .catch(_ => setText(''))
    }, [filePath])

    return (filePath ? text : '');
}

export default useMdFile;
