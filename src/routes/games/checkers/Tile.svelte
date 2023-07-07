<script>
    export let x;
    export let y;
    import whitePiece from '$lib/assets/white-circle.png'
    import blackPiece from '$lib/assets/black-circle.png'
    import data from '/src/lib/checkers/stores.js'
    let tile = $data[x][y]
    import click from '$lib/checkers/click.js'
</script>
    <href on:click={() => click(tile)}>
        <div style='background-color: {tile['color']}; height: 50px; width: 50px;'>
            {#if tile['piece'] == 'black'}
                <img src={blackPiece}>
            {:else if tile['piece'] == 'white'}
                <img src={whitePiece}>
            {/if}
        </div>
    </href>




<style>
    img {
        width: 30px;
        height: 30px;
        padding: 10px;
    }
</style>