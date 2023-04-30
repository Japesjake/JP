<script>
    export let x;
    export let y;
    import splitSlug from '/src/lib/splitSlug.js'
    import { page } from '$app/stores';
    import update from '/src/lib/update.js';
    $: data = splitSlug($page)
    $: symbol = data[x][y]
    let turn = 'x'
</script>
<a href={update($page, turn, x, y)}>
<div style='height: 50px; width:50px; background-color: black; padding: 10px 10px'>
    {#if symbol == 'x'}
            &#10060
    {/if}
</div>
</a>
