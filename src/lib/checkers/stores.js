import { writable } from 'svelte/store'

function store (key ,defaultValue) {
    if (!localStorage.getItem(key)) {
        let value = defaultValue;
    } else {
        let value = JSON.parse(localStorage.getItem(key));
    }
    const write = writable(value);
    return write;
}

let defaultValue = {}