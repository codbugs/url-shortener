export default function ShortenedLinksRepository() {

    const AIRTABLE_API_KEY = 'keySwLy8GeOaJ9y1q';
    const BASE_ID = 'app09VWldHzsDVa11';
    const LINKS_TABLE_NAME = 'Links';
    const AIRTABLE_API_BASE_URL = 'https://api.airtable.com';
    const AIRTABLE_API_VERSION = '0';
    const url = `${AIRTABLE_API_BASE_URL}/v${AIRTABLE_API_VERSION}/${BASE_ID}/${LINKS_TABLE_NAME}`;

    function transform(response) {
        return response.records.map(record => {
                    return {
                        id: record.id,
                        source: record.fields.source,
                        target: record.fields.target,
                        clicks: record.fields.clicks
                    };
                });
    }


    return {
        create({ source }) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${AIRTABLE_API_KEY}`
                },
                body: JSON.stringify({
                    records: [
                        {
                            fields: {
                                source: source,
                                clicks: 0
                            }
                        }
                    ]
                })
            })
            .then(response => response.json())
            .then(transform);
        },

        find() {
            return fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${AIRTABLE_API_KEY}`
                }
            })
            .then(response => response.json())
            .then(transform)
        },

        update({ id, clicks }) {
            return fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${AIRTABLE_API_KEY}`
                },
                body: JSON.stringify({
                    records: [
                        {
                            id: id,
                            fields: {
                                clicks: parseInt(clicks) + 1
                            }
                        }
                    ]
                })
            })
            .then(response => response.json())
            .then(transform);
        }
    };
}