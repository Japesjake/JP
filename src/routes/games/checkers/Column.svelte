<script>
    export let x;
    import isEven from '/src/lib/checkers/isEven.js'
    import Tile from './Tile.svelte'
    function move() {console.log('moving')}
</script>
{#each {length: 8} as _, y}
    <Tile on:drop={console.log('dropped')} x = {x} y = {y}/>
{/each}