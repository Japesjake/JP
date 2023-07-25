<script>
    export let x;
    export let y;
    import whitePiece from '$lib/assets/white-circle.png'
    import blackPiece from '$lib/assets/black-circle.png'
    import { data, selected } from '/src/lib/checkers/stores.js'
    let tile = $data[x][y]

    $: isSelected = $selected && $selected[0] === x && $selected[1] === y;

    function click () {
        if (isSelected) {
            $selected = null;
        } else {
            $selected = [x, y];
        }
    }
</script>
    <a href on:click={() => click()}>
        <div style='background-color: {tile['color']}; height: 50px; width: 50px;' class:selected={isSelected}>
            {#if tile['piece']}
                <img src={tile['piece'] === 'black' ? blackPiece : whitePiece} />
            {/if}
        </div>
    </a>




<style>
    img {
        width: 30px;
        height: 30px;
        padding: 10px;
    }

    div {
        border: 2px solid transparent;
    }


    .selected {
        border: 2px solid yellow;
    }
</style>