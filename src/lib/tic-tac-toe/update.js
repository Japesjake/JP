import splitSlug from '/src/lib/tic-tac-toe/splitSlug.js'
import joinSlug from '/src/lib/tic-tac-toe/joinSlug.js'
import changeTurn from '/src/lib/tic-tac-toe/changeTurn.js'
import whoWon from '/src/lib/tic-tac-toe/whoWon.js'
export default function update($page,x, y) {
    let [data, turn] = splitSlug($page)
    let symbol = data[x][y]
    if (symbol == '_') {
        data[x][y] = turn
        turn = changeTurn(turn)
    }
    let slug = joinSlug(data, turn)
    // returns current page url when the game is won.
    if (whoWon($page) != '_') {
        return $page.params.data
    }
    return '/games/tic-tac-toe/' + slug
}
