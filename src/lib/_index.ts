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
} from './components/NavBar/_index';

// Bookings Components
export { 
  BookingButton, 
  bookingSEO 
} from './components/Booking/_index';

// Svelte Functions
export { isActiveRoute } from './utils/svelteFunctions';

// ReCaptha Functions
import ReCaptchaButton from './components/ReCaptchaButton.svelte';

// SEO Functions
import SEO from './components/SEO.svelte';
export { SEO, ReCaptchaButton };

// Types
export type { SchemaWebSite, SchemaSearchAction } from '../../types/structuredData';

