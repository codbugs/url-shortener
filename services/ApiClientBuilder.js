import ApiClient from './ApiClient.js';


function Builder() {
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