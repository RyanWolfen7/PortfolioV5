<script lang="ts">
    import '../app.css';
    import { DesktopNav, MobileNav, MobileMenu, Footer, navSEO, mountSEO } from '$lib/_index';
    let { children } = $props()
    let menuOpen = $state(false);

    function toggleMenu() { menuOpen = !menuOpen; }    
    mountSEO(navSEO);
</script>

<div class="min-h-screen flex flex-col bg-slate-900 text-white">
    <header class="bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 shadow-lg border-b border-amber-500/10">
        <DesktopNav />
        <MobileNav {toggleMenu} {menuOpen}/>
    </header>
    <MobileMenu {toggleMenu} {menuOpen} />
    <main id="content" class="flex-1 flex flex-col">
        <div class="flex-grow">
            {@render children()}
        </div>
    </main>
    <Footer />
</div>