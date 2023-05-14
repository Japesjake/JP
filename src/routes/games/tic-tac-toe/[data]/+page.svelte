<script>
    import Row from './Row.svelte';
    import Turn from './Turn.svelte';
</script>

<table>
    <div style = 'position: absolute; left: 25%; text-align: center;'>
    <a href = '/games/tic-tac-toe/___&___&___&x'>New Game</a>
        <Row y = 0/>
        <Row y = 1/>
        <Row y = 2/>
        <Turn />
    </div>
</table>