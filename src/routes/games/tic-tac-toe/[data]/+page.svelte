<script>
    export let data;
    import Row from '/src/lib/Row.svelte';
    let slug = data.slug
</script>

<table>
    <Row slug = {slug} />
    <Row slug = {slug} />
    <Row slug = {slug} />
</table>

