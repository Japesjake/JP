<script>
    export let x;
    export let y;
    import { data, selected } from '/src/lib/checkers/stores.js';
    import Circle from '$lib/components/Circle.svelte';
    let tile = $data[x][y];

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
        <div style='background-color: {tile['color']};' class:selected={isSelected}>
            {#if tile['piece']}
                {#if tile['piece'] === 'black'}
                    <Circle fill="black" />
                {:else}
                    <Circle fill="white" />
                {/if}
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
        height: 50px;
        width: 50px;
        overflow: hidden;
    }


    .selected {
        border: 2px solid yellow;
    }
</style>