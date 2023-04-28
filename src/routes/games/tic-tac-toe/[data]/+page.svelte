<script>
    export let data;
    import Row from '/src/lib/Row.svelte';
    let slug = data.slug
</script>

<table>
    <Row slug = {slug} y = 'top'/>
    <Row slug = {slug} y = 'mid'/>
    <Row slug = {slug} y = 'bot'/>
</table>

