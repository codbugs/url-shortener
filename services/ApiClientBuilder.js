import ApiClient from './ApiClient.js';
import Logger from './Logger.js';


function Builder() {

    Logger.info('ApiClientBuilder', 'Builder', 'init');
    Logger.info('ApiClientBuilder', 'Builder', process.env);

    const params = {
        protocol: process.env.NEXT_PUBLIC_PROTOCOL,
        domain: process.env.NEXT_PUBLIC_DOMAIN,
        port: process.env.NEXT_PUBLIC_PORT
    };

    return {
        build() {
            return ApiClient(params);
        }
    };
}

export const ApiClientBuilder = new Builder();