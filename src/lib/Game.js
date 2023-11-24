import { data } from '$lib/checkers/stores'

export default class Game {
    constructor() {
        this.clicked = null
    }
    updatePossibleMoves() {
        console.log('update')
    }
    handleClick({ detail: [x, y]}) {
        data.update((ed) => {
            ed.selected = [x, y];
            return ed;
        })
    }
}