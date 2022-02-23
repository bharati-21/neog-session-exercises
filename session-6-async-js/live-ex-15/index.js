const asyncFakeFetch = async () => {
  const result = await fakeFetch('Hey there!');
  console.log(result);
}

asyncFakeFetch();

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