import data from './stores.js'
import isOccupied from './isOccupied.js'
export default function click(tile) {
    console.log('clicked')
    if (isOccupied(tile)) {
        console.log('occupied')
    }
}