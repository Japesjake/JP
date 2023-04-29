export default function joinSlug(data) {
    let elements = [];
    for (let x = 0; x < data.length; x++) {
        for (let y = 0; y < data[x].length; y++) {
            elements.push(data[x][y])
        }
        if (x <= data.length - 2) {
            elements.push('&')
        }
    }
    return elements.join('');
}