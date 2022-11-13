//API key : 62b2fbf8379898f4e53b0725991274fd
//secret : 1fadc38e903da31a

let searchInput = document.querySelector('.search-input')
let searchButton = document.querySelector('.search-btn')


searchButton.addEventListener('click', () => {
    const searchValue = searchInput.value; 
    search(searchValue);
})

async function search(searchValue) {
    //Exempel : https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=abc12378asdashdjsah8sds&text=banana=per_page=20&sort=date-taken-asc&format=json
    const baseUrl = 'https://api.flickr.com/services/rest?'
    const apiKey = '&api_key=62b2fbf8379898f4e53b0725991274fd'
    const method = 'method=flickr.photos.search'
    const misc = '&format=json&nojsoncallback=1'

    const url = baseUrl + method + apiKey + '&text=' + searchValue + misc
    const response = await fetch(url);
    
    const data = await response.json();
    console.log('data fraån flickr :', data)

    createImage(data);
}

function createImage(data) {
    // exemple image-url : https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
    const picture = data.photos.photo;
    for (i = 0; i < picture.length; i++) {
        const farmId = picture[i].farm;
        const server = picture[i].server;
        const id = picture[i].id;
        const secret = picture[i].secret;
        const title = picture[i].title;

        const photoSection = document.querySelector('.photos')
        const image = document.createElement('img');
        const imgUrl = `https://farm${farmId}.staticflickr.com/${server}/${id}_${secret}_q.jpg`;
        image.setAttribute('src', imgUrl)
        image.setAttribute('title', `${title}`)

        photoSection.append(image);
    }

    
}