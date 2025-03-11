/**
 * Type definitions for website structured data
 */

/**
 * SearchAction interface according to schema.org
 */
interface SchemaSearchAction {
  "@type": "SearchAction";
  "target": string;
  "query-input": string;
}

/**
 * WebSite interface according to schema.org
 */
interface SchemaWebSite {
  "@context": "https://schema.org";
  "@type": "WebSite";
  "name": string;
  "url": string;
  "potentialAction": SchemaSearchAction;
}

/**
 * Website structured data for Ryan Clark's portfolio
 */
declare const websiteStructuredData: SchemaWebSite;

export { SchemaWebSite, SchemaSearchAction, websiteStructuredData };
