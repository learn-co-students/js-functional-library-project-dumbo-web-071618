fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for(const key in collection){
        callback(collection[key])
      }

      return collection
    },

    map: function(collection, callback) {
        let newCollection = [];
        for(const key in collection) {
          newCollection.push(callback(collection[key]))
        }
        return newCollection

    },

    reduce: function(collection, callback, acc=0) {
      for (const key in collection) {
        acc = callback(acc, collection[key])
      }
      return acc
    },
    
    find: function(collection, predicate) {
      for (const key in collection) {
        if (predicate(collection[key])) {
          return collection[key]
        }
      }
    },

    filter: function(collection, predicate) {
      let newCollection = []
      for (const key in collection) {
        if (predicate(collection[key])) {
          newCollection.push(collection[key])
        }
      }
      return newCollection
    },

    size: function(collection) {
      let i = 0
      for (const key in collection) {
        i++
      }
      return i
    },

    first: function(collection, n=0) {
      if (!n) {
        return collection[n]
      } else {
        let i = 0
        let newArr = []
        while (i < n) {
          newArr.push(collection[i])
          i++
        }
        return newArr
      }
    },

    last: function(collection, n=0) {
      if (!n) {
        return collection[collection.length - 1]
      } else {
        let i = collection.length - n
        return collection.slice(i)
      }
    },

    compact: function(arr) {
      let newArr = []
      for (const ele of arr) {
        if (!!ele) newArr.push(ele)
      }
      return newArr
    },

    sortBy: function(arr, callback) {
      let arr2 = [...arr]
      return arr2.sort(function(a,b) { 
        return callback(a) - callback(b)
      })
    },
    
    flatten: function(arr, shallow=false) {
      let newArr = []
      let i = 0
      function helper(element) {
        if ((element instanceof Array && !shallow) || (element instanceof Array && shallow && i <= 1)) {
          i++
          for (const ele of element) {
            helper(ele)
          }
          i = 1
        } else {
          newArr.push(element)
        }
      }
      helper(arr)
      return newArr
    },

    uniq: function(arr, isSorted=false, callback=null) {

      callback = (callback) ? callback : el => el
      const newArr = [arr[0]]
      const cbArr = [callback(arr[0])]
        for (ele of arr) {
          if (!cbArr.includes(callback(ele))) {
            cbArr.push(callback(ele))
            newArr.push(ele)
          }
        }
      return newArr.sort()
    },

    keys: function(obj) {
      let newArr = []
      for (const key in obj) {
        newArr.push(key)
      }
      return newArr
    },

    values: function(obj) {
      let newArr = []
      for (const key in obj) {
        newArr.push(obj[key])
      }
      return newArr
    },

    functions: function(obj) {
      let newArr = []
      for (const key in obj) {
        if (typeof obj[key] === "function") newArr.push(key)
      }
      return newArr.sort()
    }
  }
})()

fi.libraryMethod()