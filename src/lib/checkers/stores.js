import { writable } from 'svelte/store'
import makeDefault from '/src/lib/checkers/makeDefault.js'
import { browser } from '$app/environment'

export let data = {
    turn: 'white',
    selected: null,
    tiles: makeDefault(),
}
let initialValue = browser ? JSON.parse(localStorage.getItem('data')) ?? data : data;
data = writable(initialValue)
data.subscribe((value) => {
    if (browser) {
        localStorage.setItem('data', JSON.stringify(value))
    }
})
