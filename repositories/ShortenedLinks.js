import AirtableRepository from './AirtableRepository.js';


export default function ShortenedLinksRepository() {

    const master = new AirtableRepository({ table: 'Links' });

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
        create({source}) {
            const item = {
                fields: {
                    source: source,
                    clicks: 0
                }
            };

            return master.post(item).then(transform);
        },

        find() {
            return master.get().then(transform);
        },

        update({ id, clicks }) {
            const collection = [
                {
                    id: id,
                    fields: {
                        clicks: parseInt(clicks) + 1
                    }
                }
            ];

            return master.patch(collection).then(transform);
        }
    };
}