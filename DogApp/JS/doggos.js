const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

function addDoggo () {

    // start loading spinner

    fetch(BREEDS_URL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const img = document.createElement('img');
        img.src = data.message;
        img.alt = 'Cute doggo';

        document.querySelector('.doggos').append(img);

        // stop loading spinner
    })
    
}

document.querySelector('.add-doggo').addEventListener
("click", addDoggo);


const BREEDS_LIST_URL = "https://dog.ceo/api/breeds/list/all";

const select = document.querySelector('.breeds');



fetch(BREEDS_LIST_URL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        const breedsObject = data.message;
        const breedsArray = Object.keys(breedsObject);


        for (let i = 0; i < breedsArray.length; i++) {
            const option = document.createElement('option');
            option.value = breedsArray[i];
            option.innerHTML = breedsArray[i];
            select.appendChild(option);
        }
    })

    select.addEventListener("change", function(event) {
        console.log(event.target.value);
        console.log(`https://dog.ceo/api/breed/${event.target.value}/images/random`)
    });

let url = 'some url';

// getNewDoggo(url);

// make url

// show loading spinner

// fetch from the API

// Use the url to change the current image

// stop showing loading spinner
















// const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

// const promise = fetch(BREEDS_URL);

// promise
//   .then(function(response) {
//     const processingPromise = response.json();
//     return processingPromise;
//   })
//   .then(function(processedResponse) {
//     console.log(breeds);
//   });
