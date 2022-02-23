const syncCallsToServer = (msg1, msg2) => {
  fakeFetch(msg1).then(res1 => {
    fakeFetch(msg2).then(res2 => {
      console.log(res1, res2);
    })
  })
}

syncCallsToServer('Message 1', 'Message 2')

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