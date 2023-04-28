<script>
    export let symbol;
    export let slug;
    export let x;
    let [left, mid, right] = slug.split('&')
    let url = '/games/tic-tac-toe/'.concat(slug)
</script>
<a href={url}>
<div style='height: 50px; width:50px; background-color: black; margin: 1px;'></div>
</a>