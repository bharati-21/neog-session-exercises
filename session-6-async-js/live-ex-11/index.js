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

  fakeFetch('Success', true)
  .then(result => console.log(result))
  .catch(err => console.error(err))

async function fetchResult() {
  try {
    const result = await fakeFetch('Reject1', true);
    const res2 = await fakeFetch('Reject', true);
    console.log(result, res2);
  }
  catch(err)
   {
     console.error(err);
   }
}

fetchResult()

