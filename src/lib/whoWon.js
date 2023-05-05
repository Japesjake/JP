import splitSlug from '/src/lib/splitSlug.js'
import { page } from '$app/stores'
function checkCoords ($page, coords, symbol) {
    let [data, turn] = splitSlug($page);
    let counter = 0;
    for (let x = 0; x < data.length; x++){
        for (let y = 0; x < data[x].length; y++) {
            for (let c = 0; c < coords.length; c++) {
                if (coords[c] == [x,y] && data[x][y] == symbol) {
                    counter++
                }
            }
        }
    }
    return counter == 3;
}
function checkSymbol ($page, symbol){
    let coords = [[0,0],[0,1],[0,2]]
    let bool = true
    // let bool = checkCoords($page, coords, symbol)
    return bool
}
export default function whoWon($page) {
    let bools = [true, false]
    // let bools = [checkSymbol($page, 'x'), checkSymbol($page, 'y')]
    if (bools[0]) {
        return 'x'
    } else if (bools[1]) {
        return 'y'
    }
        return '_'
}
