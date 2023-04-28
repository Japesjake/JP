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
    console.log(symbol)
</script>
<a href='/'>
<div style='height: 50px; width:50px; background-color: black; margin: 1px;'></div>
</a>
{#if symbol == 'x'}
    &#10060
{/if}

