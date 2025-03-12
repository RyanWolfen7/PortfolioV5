<script lang="ts">
	import { onMount } from "svelte";
    let { websiteStructuredData } = $props();
    
    onMount(() => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.innerHTML = JSON.stringify(websiteStructuredData);
        document.head.appendChild(script);
    });
</script>
