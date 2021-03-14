function Builder() {

    return {
        create({ headers, short, target }) {
            return {
                userAgent: headers['user-agent'],
                referer: headers['referer'],
                created: new Date().valueOf(),
                short: short,
                target: target
            };
        }
    };
}

export const AnalyticsModelBuilder = new Builder();