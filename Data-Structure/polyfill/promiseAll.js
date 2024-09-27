// promise all 

function task(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time)
    }, time)
  })
}


const tasksList = [task(1000), task(2000), task(3000)]


function PromiseAll(tasks) {
  let result = []
  let promiseCount = 0;

  return new Promise((resolve, reject) => {
    tasks.forEach((promise, index) => {
      promise.then((val) => {
        result[index] = val
        promiseCount += 1
        if (promiseCount === tasks.length) {
          resolve(result)
        }
      })
      promise.catch((err) => {
        reject(err)
      })
    })
  })

}

PromiseAll(tasksList).then((val) => {
  console.log(val)
}).catch((err) => {
  console.log(err)
})
