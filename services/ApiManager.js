export default function ApiManager() {

    return {
        create(params) {

            const url = params.url;

            return fetch('/api/shortened', {
                method: 'POST',
                body: JSON.stringify({
                    source: url
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(response => response.json())
                .catch(err => {});
        },

        find() {

            return fetch('/api/shortened', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(response => response.json())
                .catch(err => {});
        }
    };
}