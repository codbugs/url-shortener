export const Model = (function() {

    console.log('>>> MODEL init');

    let data = [{
        id: 'abc',
        source: 'https://www.google.com',
        target: 'http://localhost:3000/abc'
    }, {
        id: '123',
        source: 'https://www.duckduckgo.com',
        target: 'http://localhost:3000/123'
    },];

    /* ********
        data items will be like this one
        { 
            id: '', // will be a long string
            source: '', // will be a url string
            target: '' // will be a url string 
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