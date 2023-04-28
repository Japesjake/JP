<script>
    export let x;
    export let y;
    import { page } from '$app/stores';
    let slug = $page.params.data;
    let [top, mid, bot] = slug.split('&');
    let data = [
        top.split(''),
        mid.split(''),
        bot.split('')
    ]
    let symbol = data[x][y];
</script>
<a href='/'>
<div style='height: 50px; width:50px; background-color: black;'>
    {#if symbol == 'x'}
        <div style='font-size: 50px;'>
            &#10060
        </div>
    {/if}
</div>
</a>
