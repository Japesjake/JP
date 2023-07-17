import isOccupied from './isOccupied.js'
import isSelected from './isSelected.js'

export default function click(x, y, $data, $selected) {
    console.log('click')
    $selected = 'this'
    // let tile = $data[x][y]
    // if (isOccupied(tile) && !$selected) {
    //     $selected = tile
    //     console.log('selected')
    //     console.log($selected)
    //     console.log(tile)
    // } else if ($selected == tile){
    //     $selected = null
    //     console.log('unselected')
    // }
}