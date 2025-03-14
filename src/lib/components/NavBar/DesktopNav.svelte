<script>
    import { isActiveRoute } from '$lib';
	import BookingButton from '../Booking/BookingButton.svelte';
</script>

<nav class="hidden md:flex justify-between items-center p-4 max-w-7xl mx-auto" aria-label="Main navigation">
    <div class="flex items-center">
        <a href="/" class="mr-12 transition-transform duration-500 hover:scale-105 mb-0 pb-0" aria-label="Ryan Clark - Home">
            <img src="/logo.svg" alt="Ryan Clark Logo" width="250" height="240" />
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
        <a class="transition-all duration-300 hover:scale-110 hover:rotate-6 relative group" href="https://github.com/RyanWolfen7/PortfolioV5" aria-label="GitHub Profile" rel="noopener noreferrer" target="_blank">
            <span class="absolute -inset-3 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-75"></span>
            <img src="/github.svg" alt="GitHub" class="h-6 w-6 filter brightness-100 relative z-10" width="24" height="24" />
        </a>
        <a class="transition-all duration-300 hover:scale-110 hover:rotate-6 relative group" href="https://www.linkedin.com/in/ryan-clark-fullstack-dev/" aria-label="LinkedIn Profile" rel="noopener noreferrer" target="_blank">
            <span class="absolute -inset-3 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-75"></span>
            <img src="/linkedin.svg" alt="LinkedIn" class="h-6 w-6 filter brightness-100 relative z-10" width="24" height="24" />
        </a>
        <BookingButton />
    </div>
</nav>