import Serializable from "../Serializable";
import Articles from "../blog/Articles";

export default class ServerConfig implements Serializable<ServerConfig> {
    markdown_files_root: string = '';
    articles: Articles = {};

    deserialize(input: {}) {
        // @ts-ignore
        this.markdown_files_root = input.markdown_files_root;

        // @ts-ignore
        this.articles = input.articles;

        return this;
    }
}
