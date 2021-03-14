export const Analytics = (function() {

    let data = [];

    return {
        create(item) {
            data.push(item);

            console.log('>>> ANALYTICS');
            console.log(data);
        }
    };
})();