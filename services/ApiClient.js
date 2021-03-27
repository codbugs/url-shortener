export default function ApiClient({protocol, domain, port}) {

    // checking input parameters values
    if(null === domain || undefined === domain) {
        throw new Error('domain cannot be null or undefined');
    }

    if(null === port || undefined === port) {
        throw new Error('port cannot be null or undefined');
    }

    if(null === protocol || undefined === protocol) {
        throw new Error('protocol cannot be null or undefined');
    }

    // returned object implementation
    return {
        create(params) {

            const url = params.url;

            return fetch(`${protocol}://${domain}:${port}/api/shortened`, {
                method: 'POST',
                body: JSON.stringify({
                    source: url
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(response => response.json())
                .catch(err => {
                    console.log('>>> [ApiClient] err', err);
                    return Promise.reject(err);
                });
        },

        find() {

            return fetch(`${protocol}://${domain}:${port}/api/shortened`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(response => response.json())
                .catch(err => {
                    // TODO: check values to return when error
                    console.log('>>> [ApiClient] find ERROR', err);
                    return [];
                });
        }
    };
}