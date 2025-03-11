<script>
    import { isActiveRoute } from '$lib/_index';
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