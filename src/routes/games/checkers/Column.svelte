<script>
    export let x;
    import Tile from './Tile.svelte'
</script>

{#each {length: 8} as _, y}
    <Tile {x} {y} on:clickTile />
{/each}