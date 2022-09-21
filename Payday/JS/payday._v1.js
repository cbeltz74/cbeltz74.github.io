// lastPayDay input
const p = document.getElementById('lastPayday');

const f = document.getElementById('frequency');


console.log(p);
console.log(f);



const frequency = f.value;


p.addEventListener('change', nextDate);
f.addEventListener('change', nextDate);


// //     document.addEventListener("input");


/* 

const date1 = new Date('10/18/2022');
const date2 = new Date('10/23/2022');
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
console.log(diffTime + " milliseconds");
console.log(diffDays + " days");

*/



    function nextDate() {

        const lastPaydate = p.value;
        const frequency = f.value;

        let weekly = lastPaydate + 7;
        let twoweeks = lastPaydate + 14;
        let monthly = lastPaydate + 30;
        let yearly = lastPaydate + 365;
        
        if (frequency.value == weekly) {
            const nextPaydate = new Date();
            d.setDate(d.getDate() + weekly);
            document.write("answer").innerText = d;
        } else if (frequency.value  == twoweeks) {
            const nextPaydate = new Date();
            d.setDate(d.getDate() + twoweeks);
            document.write("answer").innerText = d;
        } else if (frequency.value  == monthly) {
            const nextPaydate = new Date();
            d.setDate(d.getDate() + monthly);
            document.write("answer").innerText = d;
        } else if (frequency.value  == yearly) {
            const nextPaydate = new Date();
            d.setDate(d.getDate() + yearly);
            document.write("answer").innerText = d;
        }
    }
            // function whenIsNextPayDay() {
            // take date of last payday and frequency and compare to today Date
            // provide answwer based on how many days since user was paid and how many days until the next pay date.

            // if 1-3 days away from next payday, state it getting closer or something.

            // if 4-7 days away, state a ways to go

            // if 9-13 days, have snarky or comforting message.

            //     Your next payday is .... then message.



            // console.log('lastPaydate');
            // console.log('frequency');
