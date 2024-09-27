window.myLocalStorage = {
  setItem: function(key, value, maxAge = 30 * 60 * 60 * 1000) {

    const result = {
      data: value
    }

    if (maxAge) {
      result.expiryTime = Date.now() + maxAge;
    }
    window.localStorage.setItem(key, JSON.stringify(result))
  },

  getItem: function(key) {
    const result = JSON.parse(window.localStorage.getItem(key))

    if (result) {
      if (result.expiryTime <= Date.now()) {
        return window.localStorage.removeItem(key)
      }

      return result.data
    }

  },

  removeItem: function(key) {
    return window.localStorage.removeItem(key)
  },

  clear: function(key) {
    return window.localStorage.clear();
  }

}


myLocalStorage.setItem('foo', 'bar', 1000);

setTimeout(() => {
  console.log(myLocalStorage.getItem('foo'));
}, 1500);
