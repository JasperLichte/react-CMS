import React from 'react';
import Markdown from 'markdown-to-jsx';
import useMdFile from './hooks/useMdFile';

const App: React.FC = () => {
  const md = useMdFile('data/test.md');

return (<Markdown>{md}</Markdown>);
}

export default App;
