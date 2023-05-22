<script>
    export let color;
    export let x;
    export let y;
    import data from '/src/lib/checkers/stores.js'
    let tile = $data[x][y]
    console.log($data)
</script>

<div style='height: 50px; width: 50px; background-color: {color};'>
{#if tile['piece'] == 'red'}
    &#11093
{:else if tile['piece'] == 'black'}
    &#11093
{/if}
</div>