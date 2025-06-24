const URL = {
    BANKING: 'banking/',
    INSURANCE: 'insurance/',
    FINANCE_ESG: 'finance-esg/',
    AI_AGENT: 'ai-agent/',
}

const data = {
    CARD_REDIRECT_URLS: [URL.BANKING, URL.INSURANCE, URL.FINANCE_ESG],
    HEADER_REDIRECTS: {
        BANKING: {},
        INSURANCE: {},
        FINANCE_ESG: {
            ESG_KPI_ENGINE: URL.FINANCE_ESG + 'esg-kpi-engine/',
        },
        AI_AGENT: {}
    }
}


export default data;