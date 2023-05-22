<script>
    export let x;
    import isEven from '/src/lib/checkers/isEven.js'
    import Tile from './Tile.svelte'
</script>
{#each {length: 8} as _, y}
    <Tile x = {x} y = {y} />
{/each}