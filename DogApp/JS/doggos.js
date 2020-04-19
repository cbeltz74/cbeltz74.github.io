const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

    fetch(BREEDS_URL)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const img = document.createElement('img');
            img.src = data.message;
            img.alt = 'Cute doggo';

            document.querySelector('.doggos').append(img);
        })





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
