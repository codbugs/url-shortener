export default function trustedDomainBlocker(fn) {
    return (function (req, res) {
                
        const trustedDomain = process.env.TRUSTED_DOMAIN || '*';

        const hostHeader = req.headers['host'];
        const isAnyDomainAllowed = trustedDomain === '*';
        const isHostInTrustedDomains = hostHeader.startsWith(trustedDomain);

        return isHostInTrustedDomains || isAnyDomainAllowed
            ? fn(req, res)
            : res.status(403).end();
    });
};