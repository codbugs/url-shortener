import AirtableRepository from './AirtableRepository.js';


export default function AnalyticsRepository() {
    
    const master = new AirtableRepository({ table: 'Analytics' });

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
            const item = {
                fields: {
                    resourceId,
                    headers,
                    sourceUrl,
                    ip,
                    created
                }
            };

            return master.post(item).then(transform);
        }
    };
}