export default function joinSlug(data, turn) {
    let elements = [];
    for (let x = 0; x < data.length; x++) {
        for (let y = 0; y < data[x].length; y++) {
            elements.push(data[x][y])
        }
        elements.push('&')
    }
    elements.push(turn)
    console.log(elements.join(''))
    return elements.join('');
}