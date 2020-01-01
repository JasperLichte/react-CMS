import Config from "../models/Config";

export default class Api {

    private static fetchOptions = (): RequestInit => ({
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });

    public static get = (path: string) => 
        Api.doRequest(path, {method: 'GET'});

    public static post = (path: string, body: {} = {}) => {
        const options: any = {
            method: 'POST'
        }
        if (Object.keys(body).length) {
            options['body'] = JSON.stringify(body);
        }

        return Api.doRequest(path, options);
    }

    private static doRequest = (path: string, options: {}) =>
        fetch(`${Config.serverBasePath()}/${path}`, {
            ...Api.fetchOptions(),
            ...options
        });

}
