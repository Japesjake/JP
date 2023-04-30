import splitSlug from {/src/lib/splitSlug.js}
import joinSlug from {/src/lib/joinSlug.js}

export default function update($page, turn, x, y) {
    let slug = $page.params.data
    let data = splitSlug(slug)
    data[x][y] = turn
    slug = joinSlug(data)
    url = '/games/tic-tac-toe/' + slug
    return url
}
