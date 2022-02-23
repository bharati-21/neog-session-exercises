const syncCallsToServer = async (msg1, msg2) => {
  const res1 = await fakeFetch(msg1);
  const res2 = await fakeFetch(msg2);

  console.log(res1, res2);
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