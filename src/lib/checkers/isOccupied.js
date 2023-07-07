export default function isOccupied(tile) {
    if (tile['piece']) {
        return true
    }
    return false
}