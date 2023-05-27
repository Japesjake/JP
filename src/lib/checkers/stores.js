import { writable } from 'svelte/store'
import makeDefault from '/src/lib/checkers/makeDefault.js'
import { browser } from '$app/environment'

let data = []
data = makeDefault(data)
let initialValue = browser ? localStorage.getItem('data') ?? data : data;
data = writable(data)
data.subscribe((value) => {
    if (browser) {
        localStorage.setItem('data', value)
    }
})

export default data;

// function store (key, defaultValue) {
//     if (!localStorage.getItem(key)) {
//         var value = defaultValue;
//     } else {
//         var value = JSON.parse(localStorage.getItem(key));
//     }
//     const write = writable(value);
//     return write;
// }

// let data = []
// let defaultValue = makeDefault(data)
// export default data = store("data", defaultValue)
// data.subscribe((value) => localStorage.data = JSON.stringify((value)))
