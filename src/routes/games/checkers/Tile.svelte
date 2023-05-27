<script>
    export let x;
    export let y;
    import data from '/src/lib/checkers/stores.js'
    let tile = $data[x][y]
</script>

<div style='height: 50px; width: 50px; background-color: {tile['color']};'>
    <div style='padding-top: 6px; padding-left: 9px; font-size: 30px'>
    {#if tile['piece'] == 'red'}
        &#128308
    {:else if tile['piece'] == 'white'}
        &#9898
    {/if}
    </div>
</div>