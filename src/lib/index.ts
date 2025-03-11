/**
 * Main barrel file for the lib directory
 * This file re-exports all utilities, components, and functions
 * to make imports easier in layouts and pages
 */

// Navigation Components
export { 
  DesktopNav, 
  MobileNav, 
  MobileMenu, 
  Footer, 
  navSEO 
} from './components/NavBar';

// Svelte Functions
export { isActiveRoute } from './utils/svelteFunctions';

// SEO Functions
export { appendWebsiteStructuredData,mountSEO } from './utils/seoFunctions';

// Types
export type { SchemaWebSite, SchemaSearchAction } from '../../types/structuredData';

