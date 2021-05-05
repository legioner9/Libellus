'use strict'

const INTERVAL = 500;
const MAX_VALUE = 10;

let counter = 0;
let timer;

const event = () => {
    if (counter === MAX_VALUE) {
        console.log(timer, counter, 'the end');
        clearInterval(timer);
    }
    console.dir(counter, new Date(),{dep});


}