export const Model = (function() {

    console.log('>>> MODEL init');

    let data = [];

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