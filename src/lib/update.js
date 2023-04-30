function splitSlug(slug){
    let [top, mid, bot] = slug.split('&');
        let data = [
        top.split(''),
        mid.split(''),
        bot.split('')
    ]
    return data
}
function joinSlug(data) {
    let elements = [];
    for (let x = 0; x < data.length; x++) {
        for (let y = 0; y < data[x].length; y++) {
            elements.push(data[x][y])
        }
        if (x <= data.length - 2) {
            elements.push('&')
        }
    }
    return elements.join('');
}
export default function update($page, turn, x, y) {
    let slug = $page.params.data
    let data = splitSlug(slug)
    data[x][y] = turn
    slug = joinSlug(data)
    return '/games/tic-tac-toe/' + slug
}
