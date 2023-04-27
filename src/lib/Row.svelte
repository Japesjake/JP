<script>
    import Cell from '/src/lib/Cell.svelte'
    export $: top, mid, bot;
</script>

<tr>
    <td><Cell top = {top} mid = {mid} bot = {bot} /></td>
    <td><Cell top = {top} mid = {mid} bot = {bot} /></td>
    <td><Cell top = {top} mid = {mid} bot = {bot} /></td>
</tr>