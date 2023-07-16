
import isOccupied from './isOccupied.js'
import isSelected from './isSelected.js'
let selected;
export default function click(x, y, $data) {
    console.log('click')
    let tile = $data[x][y]
    if (isOccupied(tile) && !selected) {
        selected = tile
        console.log('selected')
    } else if (selected == tile){
        selected = null
        console.log('unselected')
    }
}