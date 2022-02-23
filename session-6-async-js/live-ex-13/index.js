const getServerResponseLength = msg => {
  return fakeFetch(msg).then(result => {
      console.log(result);
      return result.length
  });
}


getServerResponseLength('Hello World!')
.then(result => console.log(result))
.catch(err => console.log(err));


const asyncGetServerResponseLength = async msg => {
  const res = await fakeFetch(msg, true);
  const res2 = await fakeFetch(msg, true);
  console.log(res, res2);
}

asyncGetServerResponseLength('Hellloooo!').catch(err => console.log(err));


function fakeFetch(msg, shouldReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`error from server: ${msg}`)
      }
      resolve(`from server: ${msg}`)
    }, 3000)
  })
}

const syncServerResponseLength = async (msg1, msg2) => {
  results = await Promise.all([
    fakeFetch(msg1),
    fakeFetch(msg2)
  ])
  results.forEach(element => {
    console.log(element.length)
  });

}

syncServerResponseLength('Hello', 'Byeeeeee')