import Serializable from "./Serializable";

export default class ClientConfig implements Serializable<ClientConfig> {
    server: Server;

    deserialize(input: {}) {
        // @ts-ignore
        this.server = new Server().deserialize(input.server);

        return this;
    }
}

class Server implements Serializable<Server> {
    base_path: string;
    config_location: string;

    deserialize(input: {}) {
        // @ts-ignore
        this.base_path = input.base_path;
        // @ts-ignore
        this.config_location = input.config_location;

        return this;
    }
}
