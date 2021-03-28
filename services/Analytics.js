export default function Analytics(options) {

    let model = options.model || null;

    return {
        // genenerate shortened ids
        async create({req, resourceId, item}) {
            const created = await model.create({
                resourceId: resourceId, 
                headers: JSON.stringify(req.headers), 
                sourceUrl: item.source,
                ip: req.connection.remoteAddress,
                created: (new Date()).valueOf(),
            });
            return created[0] !== null;
        }
    };
}