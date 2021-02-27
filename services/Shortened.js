import Generator from './Generator.js';

export default function Shortened(options) {

    const data = [];

    const generatorService = new Generator();

    return {
        // genenerate shortened ids
        create(url) {

            // check if the url exists in our database and returns it
            const doesUrlExistsInDatabase = data.some(i => i.source === url);

            if(doesUrlExistsInDatabase) {
                return data.filter(i => i.source === url)[0];
            }

            // in the other hand, lets create a new item
            const id =  generatorService.create(url);

            const item = {
                source: url,
                target: `${options.protocol}://${options.domain}:${options.port}/${id}`
            };

            data.push(item);

            return item;
        },

        // retrieve all shortened urls
        find() {
            return [...data];
        }
    };
}