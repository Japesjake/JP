import splitSlug from '/src/lib/splitSlug.js'
import { page } from '$app/stores'
import winningCoords from '/src/lib/winningCoords.js'
function checkCoords ($page, coords, symbol) {
    let [data, turn] = splitSlug($page);
    let counter = 0;
    for (let x = 0; x < data.length; x++){
        for (let y = 0; y < data[x].length; y++) {
            for (let c = 0; c < coords.length; c++) {
                if (coords[c].toString() == [x,y].toString() && data[x][y] == symbol) {
                    console.log('Match!')
                    counter++
                }
            }
        }
    }
    return counter == 3;
}
function isAny(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            return true
        }
    }
    return false
}
function checkSymbol ($page, symbol){
    let bools = []
    let coords = winningCoords
    for (let i = 0; i < coords.length; i++) {
        bools.push(checkCoords($page, coords[i], symbol))
    }
    return isAny(bools)
}
export default function whoWon($page) {
    let bools = [checkSymbol($page, 'x'), checkSymbol($page, 'o')]
    console.log(bools)
    if (bools[0]) {
        return 'x'
    } else if (bools[1]) {
        return 'o'
    }
        return '_'
}
