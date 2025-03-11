<script lang="ts">
    import { onMount } from 'svelte';
    import { bookingSEO, appendWebsiteStructuredData } from '$lib/_index';
    let { children } = $props();
    onMount(() => {
        appendWebsiteStructuredData(bookingSEO);
    });
</script>


{@render children()}