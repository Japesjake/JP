<script>
    import { createEventDispatcher } from 'svelte';
    export let x;
    export let y;
    import { data } from '/src/lib/checkers/stores.js';
    import Circle from '$lib/components/Circle.svelte';

    const dispatch = createEventDispatcher();
    let tile = $data.tiles[x][y];

    $: isSelected = $data.selected && $data.selected[0] === x && $data.selected[1] === y;
</script>
    <a href on:click={dispatch('clickTile', [x, y])}>
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