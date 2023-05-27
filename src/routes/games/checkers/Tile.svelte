<script>
    export let x;
    export let y;
    import whitePiece from '$lib/assets/white-circle.png'
    import blackPiece from '$lib/assets/black-circle.png'
    import data from '/src/lib/checkers/stores.js'
    let tile = $data[x][y]
</script>

<!-- <div style='height: 50px; width: 50px; background-color:   {tile['color']};'> -->
<div id='tile' style='background-color: {tile['color']}'>
    {#if tile['piece'] == 'black'}
        <img src={blackPiece}>
    {:else if tile['piece'] == 'white'}
        <img src={whitePiece}>
    {/if}
</div>

<style>
    img {
        width: 30px;
        height: 30px;
        padding: 10px;
    }
    #tile {
        height: 50px;
        width: 50px;
    }

</style>