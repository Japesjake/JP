<script>
    import splitSlug from '/src/lib/splitSlug.js'
    import joinSlug from '/src/lib/joinSlug.js'
    import isWon from '/src/lib/isWon.js'
    import { page } from '$app/stores';
    import changeTurn from '/src/lib/changeTurn.js'
    $: [data, turn] = splitSlug($page)
</script>
<h1>
    {#if !isWon()}
        {#if turn == 'x'}
            &#10060
        {:else if turn == 'o'}
            &#11093
        {/if}
            's turn
        {#if isWon()}
    {:else}
        {changeTurn(turn)} won!
    {/if}
</h1>