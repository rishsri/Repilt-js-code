 // js caching 

function slow  (x)  {
  alert("called the " + x)
}

function chacheFunction (funcCallAgain)  {
  const cache = new Map();
  return function(x){
    if(cache.has(x)){
      return cache.get(x)
    }
    let result = funcCallAgain(x)
    cache.set(x, result)
    return result
  } 
}

slow = chacheFunction(slow)

alert(slow(1))
alert("again"+slow(2))