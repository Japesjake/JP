<script>
    import Cell from '/src/lib/Cell.svelte'
    export let slug;
    export let y;
</script>

<tr>
    <td><Cell slug = {slug} x = 'left'/></td>
    <td><Cell slug = {slug} x = 'mid'/></td>
    <td><Cell slug = {slug} x = 'right'/></td>
</tr>