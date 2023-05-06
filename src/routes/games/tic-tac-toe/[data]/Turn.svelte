<script>
    import splitSlug from '/src/lib/splitSlug.js'
    import joinSlug from '/src/lib/joinSlug.js'
    import whoWon from '/src/lib/whoWon.js'
    import { page } from '$app/stores';
    import changeTurn from '/src/lib/changeTurn.js'
    $: [data, turn] = splitSlug($page)
    $: winner = whoWon($page)
    import sadFace from '$lib/assets/sad-face.png'

    
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
            &#10060 won!
        {:else if winner == 'o'}
            &#11093 won!
        {:else if winner == 'cat'}
            <img src = {sadFace} alt = 'sadface' width = '50px'>
        {/if}

    {/if}
</h1>