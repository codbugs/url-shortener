import Generator from './Generator.js';

export default function Shortened(options) {

    let model = options.model || null;

    const generatorService = new Generator();

    return {
        // genenerate shortened ids
        create(url) {
            let data = model.find();

            // check if the url exists in our database and returns it
            const doesUrlExistsInDatabase = data.some(i => i.source === url);

            if(doesUrlExistsInDatabase) {
                return data.filter(i => i.source === url)[0];
            }

            // in the other hand, lets create a new item
            const id =  generatorService.create(url);

            const item = {
                id: id,
                source: url,
                target: `${options.protocol}://${options.domain}:${options.port}/${id}`,
                clicks: 0
            };

            return model.create(item);
        },

        // retrieve all shortened urls
        find() {
            const urls = [...model.find()];
            urls.sort((a, b) => {
                return a.clicks > b.clicks ? -1 : 1;
            });

            return urls;
        },

        // retrieve only one shortened url
        get(id) {
            const items = [...model.find()];
            const isIdInItems = items.some(i => i.id === id);

            return isIdInItems  
                ? items.filter(i => i.id === id)[0]
                : null;
        },

        update(id) {
            const items = [...model.find()];
            const isIdInItems = items.some(i => i.id === id);

            return isIdInItems
                ? model.update(id)
                : null;
        }
    };
}