<script>
    export let x;
    import isEven from '/src/lib/checkers/isEven.js'
    import Tile from './Tile.svelte'
</script>
{#each {length: 4} as _, i}
    <!-- <div style = 'float: left;'> -->
        {#if isEven(x)}
            <Tile x = {x} color = 'black'/>
            <Tile x = {x} color = 'red'/>
        {:else}
            <Tile x = {x} color = 'red'/>
            <Tile x = {x} color = 'black'/>
        {/if}
    <!-- </div> -->
{/each}