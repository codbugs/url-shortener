import Logger from '../services/Logger.js';


export default function AirtableRepository({ table }) {

    Logger.info('AirtableRepository', 'AirtableRepository', 'init');
    Logger.info('AirtableRepository', 'AirtableRepository', 'table');
    Logger.info('AirtableRepository', 'AirtableRepository', table);

    
    Logger.info('AirtableRepository', 'AirtableRepository', 'process.env');
    Logger.info('AirtableRepository', 'AirtableRepository', process.env);


    const authId = process.env.AIRTABLE_API_KEY;
    const baseUrl = process.env.AIRTABLE_API_BASE_URL;
    const apiVersion = process.env.AIRTABLE_API_VERSION;
    const baseId = process.env.AIRTABLE_BASE_ID;

    const endpoint = `${baseUrl}/v${apiVersion}/${baseId}/${table}`;

    const request = ({ method, token, body }) => {
        return fetch(endpoint, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: undefined !== body ? JSON.stringify(body): undefined
        })
        .then(response => response.json());
    };

    return {
        get() {
            return request({
                method: 'GET',
                token: authId
            })
        },

        patch(collection) {
            return request({
                method: 'PATCH',
                token: authId,
                body: {
                    records: collection
                }
            });
        },

        post(item) {
            return request({
                method: 'POST',
                token: authId,
                body: {
                    records: [item]
                }
            });
        },
    }
}