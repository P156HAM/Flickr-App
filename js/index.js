//API key : 62b2fbf8379898f4e53b0725991274fd
//secret : 1fadc38e903da31a

let searchInput = document.querySelector('.search-input')
let searchButton = document.querySelector('.search-btn')

import {search} from './moduls/api.js';


searchButton.addEventListener('click', () => {
    const searchValue = searchInput.value; 
    search(searchValue);
})



