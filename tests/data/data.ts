const URL = {
    BANKING: 'banking/',
    INSURANCE: 'insurance/',
    FINANCE_ESG: 'finance-esg/',
    AI_AGENT: 'ai-agent/',
}

const TEST_DATA = {
    REDIRECTS:{
        CARD: [URL.BANKING, URL.INSURANCE, URL.FINANCE_ESG],
        HEADER: {
            BANKING: {},
            INSURANCE: {},
            FINANCE_ESG: {
                ESG_KPI_ENGINE: URL.FINANCE_ESG + 'esg-kpi-engine/',
            },
            AI_AGENT: {}
        },
        GET_IN_TOUCH: 'contact-sales/',
    },
    INVALID_EMAILS: [
        'plainaddress',
        'missingatsign.com',
        '@nodomain',
        'user@.com',
        'user@site..com',
        'user@site,com',
        'user@site com',
        'user@-site.com',
    ]
}


export default TEST_DATA;