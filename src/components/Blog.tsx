import React from 'react';
import Markdown from 'markdown-to-jsx';
import useMdFile from '../hooks/useMdFile';
import ClientConfig from '../models/ClientConfig';
import ServerConfig from '../models/ServerConfig';

interface BlogProps {
  clientConfig: ClientConfig,
  serverConfig: ServerConfig,
}

const Blog = ({clientConfig, serverConfig}: BlogProps) => {
  const md = useMdFile(`${clientConfig.server.base_path}data/test.md`);

  return (<Markdown>{md}</Markdown>);
}

export default Blog;
