function intervalHelper(message, interval) {
    setInterval(() => {
        console.log(message);
    }, interval);
}

// intervalHelper('Hello', 2000)

function coundown(number) {
    let interval = setInterval(() => {
        console.log(number);
        if(number === 0) {
            console.log('Bang Bang');
            clearInterval(interval);
        }
        number--;
    }, 1000);
}

coundown(10);