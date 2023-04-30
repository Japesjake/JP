<script>
    export let x;
    export let y;
    import splitSlug from '/src/lib/splitSlug.js'
    import { page } from '$app/stores';
    import update from '/src/lib/update.js';
    $: [data, turn] = splitSlug($page)
    $: symbol = data[x][y]
</script>
<a href={update($page, x, y)} style = 'text-decoration: none'>
<div style='color: red; height: 50px; width:50px; background-color: black; padding: 10px 10px'>
    {#if symbol == 'x'}
        &#10060
    {:else if symbol == 'o'}
        &#11093
    {/if}

</div>
</a>
