<script>
    import splitSlug from '/src/lib/splitSlug.js'
    import joinSlug from '/src/lib/joinSlug.js'
    import { page } from '$app/stores';
    $: [data, turn] = splitSlug($page)
</script>
<h1>
    {#if turn == 'x'}
        &#10060
    {:else if turn == 'o'}
        &#11093
    {/if}
        's turn
</h1>