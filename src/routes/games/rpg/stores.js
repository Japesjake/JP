import { writable } from 'svelte/store'
import { browser } from '$app/environment'

export let log = 'Welcome to Angel RPG'
let initialValue = browser ? JSON.parse(localStorage.getItem('log')) ?? log : log;
log = writable(initialValue)
log.subscribe((value) => {
    if (browser) {
        localStorage.setItem('log', JSON.stringify(value))
    }
})

export let buttons = {''}
let initialValue = browser ? JSON.parse(localStorage.getItem('buttons')) ?? buttons : buttons;
buttons = writable(initialValue)
buttons.subscribe((value) => {
    if (browser) {
        localStorage.setItem('buttons', JSON.stringify(value))
    }
})

export text = {'Enter your name here'}
let initialValue = browser ? JSON.parse(localStorage.getItem('text')) ?? text : text;
log = writable(initialValue)
log.subscribe((value) => {
    if (browser) {
        localStorage.setItem('text', JSON.stringify(value))
    }
})