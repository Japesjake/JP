<script>
    export let color;
    export let x;
    export let y;
    import makeDefault from '/src/lib/checkers/makeDefault.js'
    let data = []
    data = makeDefault(data)
</script>

<div style='height: 50px; width: 50px; background-color: {color};'>
{#if data[x][y]['piece'] == 'red'}
    &#11093
{/if}
</div>