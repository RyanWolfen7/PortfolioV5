<script lang="ts">
    import { isActiveRoute, BookingButton } from '$lib/_index';
    let { toggleMenu, menuOpen } = $props()
</script>
{#if menuOpen}
    <div id="mobile-menu" class="fixed inset-0 bg-gradient-to-b from-slate-900/95 to-slate-800/95 backdrop-blur-md z-40 flex flex-col md:hidden overflow-hidden" role="dialog" aria-modal="true" aria-label="Mobile menu">
        <div class="flex justify-end p-4">
            <button 
                onclick={toggleMenu} 
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
                <a class="transition-all duration-300 hover:scale-125 hover:rotate-6 relative group" href="https://github.com/RyanWolfen7/PortfolioV5" aria-label="GitHub Profile" rel="noopener noreferrer" target="_blank">
                    <span class="absolute -inset-5 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-75"></span>
                    <img src="/github.svg" alt="GitHub" class="h-8 w-8 filter brightness-100 relative z-10" width="32" height="32" />
                </a>
                <a class="transition-all duration-300 hover:scale-125 hover:rotate-6 relative group" href="https://www.linkedin.com/in/ryan-clark-fullstack-dev/" aria-label="LinkedIn Profile" rel="noopener noreferrer" target="_blank">
                    <span class="absolute -inset-5 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-75"></span>
                    <img src="/linkedin.svg" alt="LinkedIn" class="h-8 w-8 filter brightness-100 relative z-10" width="32" height="32" />
                </a>
            </div>
            <BookingButton {toggleMenu}/>
        </nav>
    </div>
{/if}