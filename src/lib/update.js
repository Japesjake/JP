import splitSlug from '/src/lib/splitSlug.js'
import joinSlug from '/src/lib/joinSlug.js'
import changeTurn from '/src/lib/changeTurn.js'
export default function update($page,x, y) {
    let [data, turn] = splitSlug($page)
    let symbol = data[x][y]
    if (symbol == '_') {
        data[x][y] = turn
        turn = changeTurn(turn)
    }
    let slug = joinSlug(data, turn)
    // if (winner != '_') {
    //     console.log('win')
    // }
    return '/games/tic-tac-toe/' + slug
}
