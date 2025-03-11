import type { SchemaWebSite } from '../../../types/structuredData';

/**
 * Appends structured data to the document head as JSON-LD
 * 
 * @param websiteStructuredData - The structured data object conforming to Schema.org WebSite schema
 * @returns void
 */
export const appendWebsiteStructuredData = (websiteStructuredData: SchemaWebSite) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(websiteStructuredData);
    document.head.appendChild(script);
}
