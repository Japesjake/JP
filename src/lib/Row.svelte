<script>
    import Cell from '/src/lib/Cell.svelte'
    export let slug;
</script>

<tr>
    <td><Cell slug = {slug} /></td>
    <td><Cell slug = {slug} /></td>
    <td><Cell slug = {slug} /></td>
</tr>