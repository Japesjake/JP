<script>
    export let x;
    import isEven from '/src/lib/checkers/isEven.js'
    import Tile from './Tile.svelte'
</script>
{#each {length: 4} as _, i}
    {#if isEven(x)}
        <Tile x = {x} y = {i*2} color = 'black'/>
        <Tile x = {x} y = {i*2+1} color = 'red'/>
    {:else}
        <Tile x = {x} y = {i*2} color = 'red'/>
        <Tile x = {x} y = {i*2+1} color = 'black'/>
    {/if}
{/each}