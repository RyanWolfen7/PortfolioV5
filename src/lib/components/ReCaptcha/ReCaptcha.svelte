<script lang="ts">
    import { onMount } from 'svelte';
    let siteKey = import.meta.env.RECAPTCHA_KEY;
    
    onMount(() => {
        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/enterprise.js?render=${siteKey}`;
        document.head.appendChild(script);
    });
</script>


