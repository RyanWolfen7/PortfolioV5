import type { SchemaWebSite } from "../../../../types/structuredData";

const websiteStructuredData: SchemaWebSite  = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ryan Clark Portfolio",
    "url": "https://https://ryan-clark-fullstack.dev",
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://https://ryan-clark-fullstack.dev/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
    }
};

export default websiteStructuredData;