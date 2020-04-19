let runningTotal = 0;

let buffer = "0";

let previousOperator;

let screen = document.querySelector('.screen');

function buttonClick(value) {

}

fucntion init() {
    document.querySelector('.calc-buttons')
    .addEventListener('click', function(event) {
        buttonClick(event.target.innerText);
    }

})


init();