module.exports = {
    async rewrites() {
        return [
          {
            source: '/:shortenId',
            destination: '/api/redirects/:shortenId',
          },
        ]
    },
};