<script>
    export let data;
    import Row from '/src/lib/Row.svelte';
    let slug = data.slug;
    let rows = slug.split('&');
    let [top, mid, bot] = [rows[0], rows[1], rows[2]];
</script>

<table>
    <Row top = {top} mid = {mid} bot = {bot}/>
    <Row top = {top} mid = {mid} bot = {bot}/>
    <Row top = {top} mid = {mid} bot = {bot}/>
</table>

