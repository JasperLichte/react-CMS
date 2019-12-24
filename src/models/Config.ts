import ClientConfig from "./ClientConfig";
import ServerConfig from "./ServerConfig";

export default class Config {
  private clientConfig: ClientConfig;
  private serverConfig: ServerConfig;

  public constructor(clientConfig: ClientConfig, serverConfig: ServerConfig) {
    this.clientConfig = clientConfig;
    this.serverConfig = serverConfig;
  }

  public serverBasePath = (): string => this.clientConfig.server.base_path;

  public markdownFilesRoot = (): string =>
    `${this.serverBasePath()}${this.serverConfig.markdown_files_root}`;
}
