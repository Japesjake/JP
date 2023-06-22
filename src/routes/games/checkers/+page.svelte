<script>
    import Column from './Column.svelte'
    import makedefault from '/src/lib/checkers/makeDefault.js'
    import isEven from '/src/lib/checkers/isEven.js'
</script>
<div style = 'position: absolute; left: 25%'>
    <div class="flex-container">
        {#each {length: 8} as _, x}
            <div>
                <Column x = {x}/>
            </div>
        {/each}
    </div>
</div>

<style>
    .flex-container {
        display: flex;
        background-color: blue
    }
    .flex-container > div {
        background-color: black;

    }
</style>