<script>
    import Column from './Column.svelte'
    import makedefault from '/src/lib/checkers/makeDefault.js'
    import isEven from '/src/lib/checkers/isEven.js'
</script>
<div style = 'position: absolute; left: 25%'>
    <div style = 'display: flex;'>
        {#each {length: 8} as _, x}
            <div>
                <Column x = {x}/>
            </div>
        {/each}
    </div>
</div>