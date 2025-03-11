<script lang="ts">
    let { menuOpen, toggleMenu } = $props()
    // existing imports and code
</script>

<nav class="md:hidden flex items-center justify-around p-3" aria-label="Mobile navigation">
    <a href="/" class="transition-transform duration-500 hover:scale-105" aria-label="Ryan Clark - Home">
        <img src="/logo.svg" alt="Ryan Clark Logo" width="250" height="64" />
    </a>
    <div class="flex items-center space-x-3">
        <button 
            onclick={toggleMenu} 
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