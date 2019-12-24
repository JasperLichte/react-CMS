import Serializable from "./Serializable";

export default class ServerConfig implements Serializable<ServerConfig> {
    markdown_files_root: string;

    deserialize(input: {}) {
        // @ts-ignore
        this.markdown_files_root = input.markdown_files_root;

        return this;
    }
}
