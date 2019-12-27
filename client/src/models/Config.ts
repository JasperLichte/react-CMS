import config from '../config';

export default class Config {
    public static serverBasePath = (): string => config.SERVER_BASE_PATH;
}
