<script>
    export let x;
    export let y;
    import splitSlug from '/src/lib/splitSlug.js';
    import joinSlug from '/src/lib/joinSlug.js';
    import update from '/src/lib/update.js';
    import { page } from '$app/stores';
    let slug = $page.params.data;
    let data = splitSlug(slug);
    let symbol = data[x][y];
    console.log(joinSlug(data));
</script>
<a href='/'>
<div style='height: 50px; width:50px; background-color: black;'>
    {#if symbol == 'x'}
        <div style='font-size: 30px; padding-left: 10px; padding-top: 7px'>
            &#10060
        </div>
    {/if}
</div>
</a>
