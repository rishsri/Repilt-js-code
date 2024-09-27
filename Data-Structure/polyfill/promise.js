function MyPromise(executer) {

  let resolvedValue;
  let rejectValue;

  function resolve(value) {
    resolvedValue = value;
  }

  function reject(value) {
    rejectValue = value;
  }
  this.then = function(thenCallBack) {
    thenCallBack(resolvedValue);
    return this;
  }

  this.catch = function(catchCallBack) {
    catchCallBack(rejectValue);
    return this;
  }

  executer(resolve, reject)
}

const promisees = new MyPromise((resolve, reject) => {
  resolve("2");
})
  .then((data) => {
    console.log(data)
  })


const promisees1 = new MyPromise((resolve, reject) => {
  resolve("2");
})
  .then((data) => {
    console.log(data)
  })

const promisees2 = new MyPromise((resolve, reject) => {
  resolve("2");
})
  .then((data) => {
    console.log(data)
  })

new Promise.all([promisees, promisees1, promisees2])
