/* promise any */

const task = (args) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(args)
    }, args)
  })
}

const anyPromise = (arr) => {
  let result = []
  let rejectedCount = 0
  return new Promise((resolve, reject) => {
    arr.forEach((promise, index) => {
      promise.then((val) => {
          resolve(val)

      }).catch((err) => {
      rejectedCount++
      if(rejectedCount === arr.length){
      reject("all rejected")
      }

      })
    })
  })
}

anyPromise([task(1000), task(2000), task(3000)]).then((val) => {
  console.log(val)
})
