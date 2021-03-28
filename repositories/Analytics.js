export default function AnalyticsRepository() {

    const AIRTABLE_API_KEY = 'keySwLy8GeOaJ9y1q';
    const BASE_ID = 'app09VWldHzsDVa11';
    const LINKS_TABLE_NAME = 'Analytics';
    const AIRTABLE_API_BASE_URL = 'https://api.airtable.com';
    const AIRTABLE_API_VERSION = '0';
    const url = `${AIRTABLE_API_BASE_URL}/v${AIRTABLE_API_VERSION}/${BASE_ID}/${LINKS_TABLE_NAME}`;

    function transform(response) {
        return response.records.map(record => {
                    return {
                        id: record.id,
                        resourceId: record.fields.resourceId,
                        headers: record.fields.headers,
                        sourceUrl: record.fields.sourceUrl,
                        ip: record.fields.ip,
                        created: record.fields.created
                    };
                });
    }


    return {
        create({ resourceId, headers, sourceUrl, ip, created }) {
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
                                resourceId,
                                headers,
                                sourceUrl,
                                ip,
                                created
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