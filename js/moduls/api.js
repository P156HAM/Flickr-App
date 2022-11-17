import {createImage} from '../moduls/display.js';

async function search(searchValue) {
    //Exempel : https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=abc12378asdashdjsah8sds&text=banana=per_page=20&sort=date-taken-asc&format=json
    const baseUrl = 'https://api.flickr.com/services/rest?'
    const apiKey = '&api_key=62b2fbf8379898f4e53b0725991274fd'
    const method = 'method=flickr.photos.search'
    const misc = '&format=json&nojsoncallback=1'
    const photoSection = document.querySelector('.photos')
    photoSection.innerHTML = '';

    const url = baseUrl + method + apiKey + '&text=' + searchValue + misc
    const response = await fetch(url);
    
    const data = await response.json();
    console.log('data fraån flickr :', data)

    createImage(data);
}

export {search};