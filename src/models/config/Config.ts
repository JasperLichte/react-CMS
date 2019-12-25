import ClientConfig from "./ClientConfig";
import ServerConfig from "./ServerConfig";
import Articles from '../blog/Articles';

export default class Config {
  private clientConfig: ClientConfig;
  private serverConfig: ServerConfig;

  public constructor(clientConfig: ClientConfig, serverConfig: ServerConfig) {
    this.clientConfig = clientConfig;
    this.serverConfig = serverConfig;
  }

  public serverBasePath = (): string => this.clientConfig.server.base_path;

  public markdownFilesRoot = (): string =>
    `${this.serverBasePath()}/${this.serverConfig.markdown_files_root}`;

  public articlesPaths = (): Articles => {
    const paths: Articles = {};

    for (const k in this.serverConfig.articles) {
      paths[k] = `${this.markdownFilesRoot()}/${this.serverConfig.articles[k]}`
    }

    return paths;
  }

  public articlePath = (key: string) => (this.articlesPaths()[key] || '');
}
