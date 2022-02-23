const fakeFeatch = (message, shouldResolve) => {
    return new Promise((resolve, reject) => {
        if(shouldResolve) {
            resolve(`I am a resolved promise - ${message}`);
        }
        else {
            reject('I ama a rejected promise');
        }
    })
}

fakeFeatch('Hello world!', true)
.then(result => console.log(result))
.catch(err => console.log(err));


const fakeFetch = (message, interval) => {
    const promise = new Promise((resolve, reject) => {
        if(message === '' || typeof message !== 'string') {
            reject('Enter a valid message of type string');
        }
        else if(interval < 0 || typeof interval !== 'number') {
            reject('Enter a non-negative interval of type number')
        }
        else {
            setTimeout(() => resolve(message), interval);
        }
    })
    return promise;
}

fakeFetch('Hello world!', 0)
.then(result => console.log(result))
.catch(error => console.log(error))

const fetchData = async (msg, interval) => {
    const result = await fakeFetch(msg, interval);
    console.log(result);
}

fetchData('Hello world!', 2000)