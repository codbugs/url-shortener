export const Model = (function() {

    let data = [{
        id: 'abc',
        source: 'https://www.google.com',
        target: 'http://localhost:3000/abc',
        clicks: 123
    }, {
        id: '123',
        source: 'https://www.duckduckgo.com',
        target: 'http://localhost:3000/123',
        clicks: 156
    },];

    /* ********
        data items will be like this one
        { 
            id: '', // will be a long string
            source: '', // will be a url string
            target: '', // will be a url string
            clicks: 0 // will be a number with the click times
        }
    *****/

    return {
        create(item) {
            data.push(item);
            return item;
        },

        find() {
            return [...data];
        }
    };
})();