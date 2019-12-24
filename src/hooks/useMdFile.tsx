import { useState, useEffect } from 'react';

const useMdFile = (path: string) => {
    const [text, setText] = useState('');

    useEffect(() => {
      fetch(path)
      .then((r) => r.text())
      .then(setText)
      .catch(_ => setText(''))
    }, [path])

    return text;
}

export default useMdFile;
