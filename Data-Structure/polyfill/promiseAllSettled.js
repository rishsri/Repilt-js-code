/* promise allSettled */

const task = (args) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(args)
    }, args)
  })
}

const allSettledPromise = (arr) => {
  let result = []
  let count = 0
  return new Promise((resolve, reject) => {
    arr.forEach((promise, index) => {
      promise
        .then((val) => {
          result[index] = { status: "fulfilled", value: val }
        })
        .catch((err) => {
          result[index] = { status: "Rejected", value: err }
        }).finally(() => {
          count++
          if(count === arr.length){
            resolve(result)
          }
        })
    })
  })
}

allSettledPromise([task(1000), task(2000), task(3000)])
  .then((val) => {
    console.log(val)
  })
  .catch((err) => console.log(err))
