<script>
    import Column from './Column.svelte'
    import makedefault from '/src/lib/checkers/makeDefault.js'
    import isEven from '/src/lib/checkers/isEven.js'
</script>
<div style = 'position: absolute; left: 25%'>
    {#each {length: 8} as _, x}
<div style = 'float: left'>
    {#if isEven(x)}
        <Column x = {x} start = 'red'/>
    {:else}
        <Column x = {x} start = 'black'/>
    {/if}
</div>
    {/each}
</div>