import { set_custom_element_data } from 'svelte/internal'
import isEven from '/src/lib/checkers/isEven.js'
export default function makeDefault(data) {
    for (let x = 0; x < 8; x++) {
        data[x] = []
        for (let y = 0; y < 8; y++) {
            data[x][y] = null
        }
    }
    console.log(data)
    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            let counter = 0
            if (isEven(x + y)) {
                data[x][y] = {color: 'red', piece: 'null', king: false}
            } else {
                data[x][y] = {color: 'black', piece: 'null', king: false}
            }
            if (data[x][y]['color'] == 'black'){
                if (y < 3) {
                    data[x][y]['piece'] = 'red'
                } else if (y > 4) {
                    data[x][y]['piece'] = 'white'
                }
            }
        }
    }
    // data = [[{color: 'black'},{}],[{},{}]]
    // let tile = data[0][0]
    // console.log(tile['color'])
    return data
}
