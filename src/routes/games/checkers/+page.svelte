<script>
    import Column from './Column.svelte'
</script>

{#each {length: 8} as _, x}
<div style = 'float: left;'>
    <Column x = {x}/>
</div>
{/each}