<script>
    export let x;
    export let y;
    import splitSlug from '/src/lib/splitSlug'
    import { page } from '$app/stores';
    import update from '/src/lib/update.js';
    let slug = $page.params.data;
    let data = splitSlug(slug)
    let symbol = data[x][y]
    let turn = 'x'
</script>
<a href={update(slug, turn, x, y)}>
<div style='height: 50px; width:50px; background-color: black;'>
    {#if symbol == 'x'}
        <div style='font-size: 30px; padding-left: 10px; padding-top: 7px'>
            &#10060
        </div>
    {/if}
</div>
</a>
