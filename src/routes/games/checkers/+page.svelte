<script>
    import Column from './Column.svelte';
    import Game from '$lib/Game.js';

    let game = new Game;
    game.updatePossibleMoves()
</script>
<div style = 'position: absolute; left: 25%'>
    <div style = 'display: flex;'>
        {#each {length: 8} as _, x}
            <div>
                <Column {x} on:clickTile={game.handleClick}/>
            </div>
        {/each}
    </div>
</div>