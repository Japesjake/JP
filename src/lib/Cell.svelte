<script>
    export let symbol;
    export let top, mid, bot;
    let baseURL = '/games/tic-tac-toe/';
    let fullURL = baseURL + top + '&' + mid + '&' + bot;
    console.log(fullURL)
</script>
<a href={fullURL}>
<div style='height: 50px; width:50px; background-color: black; margin: 1px;'></div>
</a>