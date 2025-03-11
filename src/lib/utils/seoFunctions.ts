import type { SchemaWebSite } from '../../../types/structuredData';
import { onMount } from 'svelte';

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

/**
 * Mounts structured data to the document head when the component is mounted
 * 
 * @param websiteStructuredData - The structured data object conforming to Schema.org WebSite schema
 * @returns The function returned by onMount
 */
export const mountSEO = (websiteStructuredData: SchemaWebSite) => { 
    onMount(() => { 
        appendWebsiteStructuredData(websiteStructuredData);
    });
}