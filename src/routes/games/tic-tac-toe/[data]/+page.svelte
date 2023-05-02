<script>
    import Row from '/src/lib/Row.svelte';
    import Turn from '/src/lib/Turn.svelte';
</script>

<h1>Tic-Tac-Toe</h1>
<table>
    <Row x = 0/>
    <Row x = 1/>
    <Row x = 2/>
    <Turn />
</table>