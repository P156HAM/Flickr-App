function createImage(data) {
    // exemple image-url : https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
    const picture = data.photos.photo;
    for (let i = 0; i < picture.length; i++) {
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

export {createImage};