const Logger = (function() {

    const formatDate = date => {
        return `${date.getFullYear()}-${date.getMonth().toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
    };


    return {
        error(obj, method, text) {
            console.error(`[${formatDate(new Date(Date.now()))}][${obj}][${method}] - ${text}`);
        },

        info(obj, method, text) {
            console.info(`[${formatDate(new Date(Date.now()))}][${obj}][${method}] - ${text}`);
        }
    }
})();

export default Logger;