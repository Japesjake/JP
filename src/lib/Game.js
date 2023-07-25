import { data } from '$lib/checkers/stores'

export default class Game {
    handleClick({ detail: [x, y]}) {
        data.update((ed) => {
            ed.selected = [x, y];
            return ed;
        })
    }
}