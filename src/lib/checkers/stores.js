import { writable } from 'svelte/store'
import makeDefault from '/src/lib/checkers/makeDefault.js'
import { browser } from '$app/environment'

export let data = []
data = makeDefault(data)
let initialValue = browser ? JSON.parse(localStorage.getItem('data')) ?? data : data;
data = writable(initialValue)
data.subscribe((value) => {
    if (browser) {
        localStorage.setItem('data', JSON.stringify(value))
    }
})

export let globals = {selected: false, turn: 'white'};
initialValue = browser ? JSON.parse(localStorage.getItem('globals')) ?? globals : globals;
globals = writable(initialValue)
globals.subscribe((value) => {
    if (browser) {
        localStorage.setItem('globals', JSON.stringify(value))
    }
})
