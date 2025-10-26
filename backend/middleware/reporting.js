export const reportingHeader = (req, res, next) => {
    res.setHeader(
        "Reporting-Endpoints",
        'csp-endpoint="https://api.boutique-to-box.com/v1/api/csp-report"'
    );
    next();
};
