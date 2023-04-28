<script>
    import Cell from '/src/lib/Cell.svelte';
    export let x;
</script>

<tr>
    <td><Cell y = 0 x = {x}/></td>
    <td><Cell y = 1 x = {x}/></td>
    <td><Cell y = 2 x = {x}/></td>
</tr>