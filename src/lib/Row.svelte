<script>
    import Cell from '/src/lib/Cell.svelte';
    export let y;
</script>

<tr>
    <td><Cell x = 0 y = {y}/></td>
    <td><Cell x = 1 y = {y}/></td>
    <td><Cell x = 2 y = {y}/></td>
</tr>