import { page } from "$app/state";

// Helper function to check if a route is active
export const isActiveRoute = (path: string): boolean => {
    if (!page.url) return false;
    return page.url.pathname === path;
}