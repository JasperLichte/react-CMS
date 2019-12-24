import { useState, useEffect } from 'react';

const useJsonFile = (path: string): {}|[]|null => {
    const [json, setJson] = useState(null);

    useEffect(() => {
      fetch(path)
      .then((r) => r.json())
      .then(setJson)
      .catch(_ => setJson(null))
    }, [path])

    return json;
}

export default useJsonFile;
