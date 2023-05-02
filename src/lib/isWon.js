import splitSlug from '/src/lib/splitSlug.js'
import { page } from '$app/stores'
function checkCoords ($page, coords, symbol) {
    let slug = $page.params.data;
    let data = splitSlug(slug);
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
    checkCoords($page, coords, symbol)
}
export default function isWon() {
    checkSymbol ($page, 'x')
    checkSymbol ($page, 'y')
}
