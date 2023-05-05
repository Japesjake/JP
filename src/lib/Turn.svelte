<script>
    import splitSlug from '/src/lib/splitSlug.js'
    import joinSlug from '/src/lib/joinSlug.js'
    import whoWon from '/src/lib/whoWon.js'
    import { page } from '$app/stores';
    import changeTurn from '/src/lib/changeTurn.js'
    $: [data, turn] = splitSlug($page)
    $: winner = whoWon($page)
    console.log(winner)
</script>
<h1>
    {#if winner == '_'}
        {#if turn == 'x'}
            &#10060
        {:else if turn == 'o'}
            &#11093
        {/if}
            's turn
    {:else}
        {#if winner == 'x'}
            &#10060
        {:else if winner == 'o'}
            &#11093
        {/if}
            won!
    {/if}
</h1>