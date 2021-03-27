export default function Shortened(options) {

    let model = options.model || null;

    return {
        // genenerate shortened ids
        async create(url) {
            let data = await model.find();

            // check if the url exists in our database and returns it
            const doesUrlExistsInDatabase = data.some(i => i.source === url);

            if(doesUrlExistsInDatabase) {
                return data.filter(i => i.source === url)[0];
            }

            const item = {
                source: url,
                clicks: 0
            };

            const created = await model.create(item);
            return created[0];
        },

        // retrieve all shortened urls
        find() {
            return model.find().then(urls => {
                urls.sort((a, b) => {
                    return a.clicks > b.clicks ? -1 : 1;
                });

                return urls;
            });
        },

        // retrieve only one shortened url
        get(id) {
            return model.find().then(items => {
                const isIdInItems = items.some(i => i.target === parseInt(id));

                return isIdInItems  
                    ? items.filter(i => i.target === parseInt(id))[0]
                    : null;
            });
        },

        update(id) {
           return model.find()
                .then(items => {
                    const isIdInItems = items.some(i => i.target === parseInt(id));

                    if(isIdInItems) {
                        const item = items.filter(i => i.target === parseInt(id))[0];
                        return item;
                    } else {
                        return null;
                    }
                })
                .then(item => {
                    return null != item
                        ? model.update(item)
                        : null;
                });
        }
    };
}