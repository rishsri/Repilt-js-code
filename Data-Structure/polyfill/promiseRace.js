/* promise race */

const task = (args) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(args)
    }, args)
  })
}

const racePromise = (arr) => {
  return new Promise((resolve, reject) => {
    arr.forEach((promise) => {
      promise.then((val) => {
        resolve(val)
      }).catch((err) => {
        reject(err)
      })
    })
  })
}

racePromise([task(1000), task(2000), task(3000)]).then((val) => {
  console.log(val)
}).catch((err) => console.log(err))
