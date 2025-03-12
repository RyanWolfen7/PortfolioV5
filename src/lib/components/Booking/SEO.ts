import type { SchemaWebSite } from "../../../../types/structuredData";

const bookingSEO: SchemaWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Book a Consultation - Ryan Clark Portfolio",
    "url": "https://ryan-clark-fullstack.dev/book",
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://ryan-clark-fullstack.dev/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
    }
};

export default bookingSEO;