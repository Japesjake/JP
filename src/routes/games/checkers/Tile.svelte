<script>
    export let x;
    export let y;
    import data from '/src/lib/checkers/stores.js'
    let tile = $data[x][y]
</script>

<div style='height: 50px; width: 50px; background-color: {tile['color']};'>
{#if tile['piece'] == 'red'}
    &#11093
{:else if tile['piece'] == 'white'}
    &#11093
{/if}
</div>