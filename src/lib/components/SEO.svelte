<script lang="ts">
	import { onMount, onDestroy } from "svelte";
    let { websiteStructuredData } = $props();
    
    let script: HTMLScriptElement; 
    onMount(() => {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.innerHTML = JSON.stringify(websiteStructuredData);
        document.head.appendChild(script);
    });
    onDestroy(() => {
        if (script && script.parentNode) {
      script.parentNode.removeChild(script);
    }
	});
</script>
