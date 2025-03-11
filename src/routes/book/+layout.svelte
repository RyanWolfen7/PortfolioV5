<script lang="ts">
    import { mountSEO, bookingSEO } from '$lib/_index';
    let { children } = $props();
    mountSEO(bookingSEO);
</script>


{@render children()}