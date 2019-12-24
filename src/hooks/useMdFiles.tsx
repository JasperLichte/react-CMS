import { useState, useEffect } from 'react';

const useMdFiles = (paths: string[]) => {
    const [texts, setTexts] = useState<string[]>([]);

    useEffect(() => {
      Promise.all(paths.map(p => fetch(p)))
      .then(rs => Promise.all(rs.map(r => r.text())))
      .then(setTexts)
    }, [paths])

    return texts;
}

export default useMdFiles;
