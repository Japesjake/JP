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

export let selected = null;

initialValue = browser ? JSON.parse(localStorage.getItem('selected')) ?? selected : selected;
selected = writable(initialValue)
if (browser) {
    selected.subscribe((value) => {
        localStorage.setItem('selected', JSON.stringify(value))
    })
}