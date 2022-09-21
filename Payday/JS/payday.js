// let lastPayday;
// let frequency;


function myFunction() {
    lastPayday = document.getElementById("lastPayday").value;
    document.getElementById("demo").innerHTML = lastPayday;

    frequency = document.getElementById("frequency").value;
    document.getElementById("demo2").innerHTML = frequency;



    const d = new Date();
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let date = d.getDate();
    let monthName = month[d.getMonth()];
    let year = d.getYear();

    let todaysDate = monthName + " " + date + ", " + year;



    document.getElementById("demo3").innerHTML = todaysDate;


  }


// function myFunction () {
//     lastPaydayAnswer = document.getElementById("lastPayday").value;
// 	frequencyAnswer = document.getElementById("frequency").value;
// }
/* 

const date1 = new Date('10/18/2022');
const date2 = new Date('10/23/2022');
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
console.log(diffTime + " milliseconds");
console.log(diffDays + " days");

*/