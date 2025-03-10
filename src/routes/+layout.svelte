<script lang="ts">
    import '../app.css';
    import { page } from '$app/state';
    import { onMount } from 'svelte';
    export let children;
    let menuOpen = false;
    
    function toggleMenu() {
        menuOpen = !menuOpen;
    }

    // Helper function to check if a route is active
    function isActiveRoute(path: string): boolean {
        if (!page.url) return false;
        return page.url.pathname === path;
    }
    
    // Website-level structured data
    const websiteStructuredData = {
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
    
    onMount(() => {
        // Add website metadata for SEO
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(websiteStructuredData);
        document.head.appendChild(script);
    });
</script>

<div class="flex flex-col min-h-screen bg-slate-900 text-white">
    <header class="bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 shadow-lg border-b border-amber-500/10">
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex justify-between items-center p-4 max-w-7xl mx-auto" aria-label="Main navigation">
            <div class="flex items-center">
                <a href="/" class="mr-12 transition-transform duration-500 hover:scale-105" aria-label="Ryan Clark - Home">
                    <img src="/logo.svg" alt="Ryan Clark Logo" width="180" height="120" />
                </a>
                <div class="flex space-x-8" role="menubar">
                    <a href="/about" class="text-slate-200 hover:text-white font-light tracking-wider transition-all duration-300 relative group" role="menuitem" aria-current={isActiveRoute('/about') ? 'page' : undefined}>
                        <span class="relative z-10 group-hover:translate-y-[-2px] transition-transform duration-300">About</span>
                        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400/80 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="/blog" class="text-slate-200 hover:text-white font-light tracking-wider transition-all duration-300 relative group" role="menuitem" aria-current={isActiveRoute('/blog') ? 'page' : undefined}>
                        <span class="relative z-10 group-hover:translate-y-[-2px] transition-transform duration-300">Blog</span>
                        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400/80 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <a href="/contact" class="text-slate-200 hover:text-white font-light tracking-wider transition-all duration-300 relative group" role="menuitem" aria-current={isActiveRoute('/contact') ? 'page' : undefined}>
                        <span class="relative z-10 group-hover:translate-y-[-2px] transition-transform duration-300">Contact</span>
                        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400/80 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </div>
            </div>
            <div class="flex items-center space-x-6">
                <a class="transition-all duration-300 hover:scale-110 hover:rotate-6 relative group" href="https://github.com/RyanWolfen7" aria-label="GitHub Profile" rel="noopener noreferrer" target="_blank">
                    <span class="absolute -inset-3 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-75"></span>
                    <img src="/github.svg" alt="GitHub" class="h-6 w-6 filter brightness-100 relative z-10" width="24" height="24" />
                </a>
                <a class="transition-all duration-300 hover:scale-110 hover:rotate-6 relative group" href="https://www.linkedin.com/in/ryan-clark-fullstack-dev/" aria-label="LinkedIn Profile" rel="noopener noreferrer" target="_blank">
                    <span class="absolute -inset-3 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-75"></span>
                    <img src="/linkedin.svg" alt="LinkedIn" class="h-6 w-6 filter brightness-100 relative z-10" width="24" height="24" />
                </a>
                <button class="group relative ml-4 py-2.5 px-6 overflow-hidden bg-slate-800/70 hover:bg-slate-700/70 text-white font-light tracking-wider text-sm border-l-2 border-amber-500 shadow-lg transition-all duration-300 hover:shadow-amber-500/30 focus:outline-none" aria-label="Book a consultation">
                    <span class="relative z-10 group-hover:translate-y-[-1px] transition-transform duration-300">Book Me</span>
                    <span class="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-amber-500/20 to-amber-600/30 transition-all duration-500 group-hover:h-full"></span>
                    <span class="absolute -inset-1 bg-white/5 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"></span>
                </button>
            </div>
        </nav>
        
        <!-- Mobile Navigation Header -->
        <nav class="md:hidden flex items-center justify-around p-3" aria-label="Mobile navigation">
            <a href="/" class="transition-transform duration-500 hover:scale-105" aria-label="Ryan Clark - Home">
                <img src="/logo.svg" alt="Ryan Clark Logo" width="180" height="64" />
            </a>
            <div class="flex items-center space-x-3">
                <button 
                    on:click={toggleMenu} 
                    class="text-white p-1 z-50 relative hover:text-amber-400 transition-all duration-300 hover:scale-110 hover:rotate-3"
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        {#if !menuOpen}
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        {:else}
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        {/if}
                    </svg>
                    <span class="absolute -inset-3 bg-white/5 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 hover:scale-75"></span>
                </button>
            </div>
        </nav>
    </header>

    <!-- Full Screen Mobile Menu -->
    {#if menuOpen}
        <div id="mobile-menu" class="fixed inset-0 bg-gradient-to-b from-slate-900/95 to-slate-800/95 backdrop-blur-md z-40 flex flex-col md:hidden overflow-hidden" role="dialog" aria-modal="true" aria-label="Mobile menu">
            <div class="flex justify-end p-4">
                <button 
                    on:click={toggleMenu} 
                    class="text-white p-1 hover:text-amber-400 transition-all duration-300 hover:scale-110 hover:rotate-12 relative group"
                    aria-label="Close menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span class="absolute -inset-3 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-75"></span>
                </button>
            </div>
            <nav class="flex flex-col items-center justify-center flex-grow p-4 relative" aria-label="Mobile navigation">
                <div class="absolute top-1/4 left-0 w-16 h-16 bg-amber-500/10 rounded-full blur-xl animate-pulse"></div>
                <div class="absolute bottom-1/3 right-0 w-24 h-24 bg-slate-700/20 rounded-full blur-xl"></div>
                <div class="absolute top-1/2 right-1/4 w-12 h-12 bg-white/5 rounded-full blur-lg"></div>

                <a href="/about" class="text-2xl text-white font-light tracking-wider transition-all duration-300 transform hover:translate-x-2 mb-8 relative group" aria-current={isActiveRoute('/about') ? 'page' : undefined}>
                    <span class="relative z-10 group-hover:text-amber-200 transition-colors duration-300">About</span>
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-300 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="/blog" class="text-2xl text-white font-light tracking-wider transition-all duration-300 transform hover:translate-x-2 mb-8 relative group" aria-current={isActiveRoute('/blog') ? 'page' : undefined}>
                    <span class="relative z-10 group-hover:text-amber-200 transition-colors duration-300">Blog</span>
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-300 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="/contact" class="text-2xl text-white font-light tracking-wider transition-all duration-300 transform hover:translate-x-2 mb-8 relative group" aria-current={isActiveRoute('/contact') ? 'page' : undefined}>
                    <span class="relative z-10 group-hover:text-amber-200 transition-colors duration-300">About</span>
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-300 transition-all duration-300 group-hover:w-full"></span>
                </a>
                
                <!-- Social icons  -->
                <div class="flex space-x-8 mt-6 mb-10">
                    <a class="transition-all duration-300 hover:scale-125 hover:rotate-6 relative group" href="https://github.com/RyanWolfen7" aria-label="GitHub Profile" rel="noopener noreferrer" target="_blank">
                        <span class="absolute -inset-5 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-75"></span>
                        <img src="/github.svg" alt="GitHub" class="h-8 w-8 filter brightness-100 relative z-10" width="32" height="32" />
                    </a>
                    <a class="transition-all duration-300 hover:scale-125 hover:rotate-6 relative group" href="https://www.linkedin.com/in/ryan-clark-fullstack-dev/" aria-label="LinkedIn Profile" rel="noopener noreferrer" target="_blank">
                        <span class="absolute -inset-5 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-75"></span>
                        <img src="/linkedin.svg" alt="LinkedIn" class="h-8 w-8 filter brightness-100 relative z-10" width="32" height="32" />
                    </a>
                </div>
                <button class="group relative mt-4 py-3 px-10 overflow-hidden backdrop-blur-sm bg-white/5 hover:bg-white/10 text-white font-light tracking-widest uppercase text-sm border border-white/10 shadow-xl transition-all duration-300 hover:shadow-amber-500/20 focus:outline-none" aria-label="Book a consultation">
                    <span class="relative z-10 group-hover:text-amber-200 transition-colors duration-500 group-hover:translate-y-[-2px] inline-block transform">Book Me</span>
                    <span class="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-r from-amber-500/20 via-amber-400/20 to-amber-600/20 transition-all duration-500 group-hover:h-full"></span>
                    <span class="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-all duration-300 scale-90 group-hover:scale-100 rounded-sm"></span>
                    <span class="absolute -inset-1 bg-white/0 group-hover:bg-white/5 blur-md transition-all duration-500"></span>
                </button>
            </nav>
        </div>
    {/if}

    <main id="content" class="flex-grow flex flex-col">
        <div class="flex-grow">
            {@render children()}
        </div>
    </main>

    <footer class="bg-slate-900/90 border-t border-amber-500/10 py-6 w-full mt-auto">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <p class="text-slate-400 text-sm">&copy; {new Date().getFullYear()} Ryan Clark. All rights reserved.</p>
        </div>
    </footer>
</div>

<style>
    /* Force minimum height even when content is sparse */
    :global(html, body) {
        height: 100%;
        margin: 0;
        padding: 0;
    }
    
    /* Ensure the main container takes full height */
    :global(body > div) {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
</style>