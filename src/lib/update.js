import splitSlug from '/src/lib/splitSlug.js'
import joinSlug from '/src/lib/joinSlug.js'

export default function update($page, turn, x, y) {
    let data = splitSlug($page)
    data[x][y] = turn
    let slug = joinSlug(data)
    return '/games/tic-tac-toe/' + slug
}
