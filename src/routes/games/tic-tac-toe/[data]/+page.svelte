<script>
    import Row from '/src/lib/Row.svelte';
    import Turn from '/src/lib/Turn.svelte';
</script>

<table>
    <div style = 'position: absolute; left: 50%; text-align: center;'>
    <a href = '/games/tic-tac-toe/___&___&___&x'>New Game</a>
        <Row x = 0/>
        <Row x = 1/>
        <Row x = 2/>
        <Turn />
    </div>
</table>