fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, fn) {
      if (Array.isArray(collection))  {
        for(let i = 0; i < collection.length; i++) {
          fn(collection[i], collection.indexOf(collection[i]), collection)
        }
      } else  {
        keys = Object.keys(collection)
        for(let i = 0; i < keys.length; i++) {
          fn(keys[i], collection[keys[i]], collection)
        }
      }
      return collection
    },

    map: function(collection, fn) {
      newArray = []
      if (Array.isArray(collection))  {
        for(let i = 0; i < collection.length; i++) {
          newArray.push(fn(collection[i], collection.indexOf(collection[i]), collection.indexOf()))
        }
      } else  {
        keys = Object.keys(collection)
        for(let i = 0; i < keys.length; i++) {
          newArray.push(fn(collection[keys[i]], keys[i], collection))
        }
      }
      return newArray
    },
    // total = 0
    // [1,2,3].foreach do |num| total += num end
    reduce: function(collection, cb, acc = 0) {
      total = acc
      for (const num in collection) {
        total = cb(total, collection[num], collection)
      }
      return total
    },
    
    find: function(collection, cb) {
      for (const element of collection) {
        if (cb(element)) {
          return element
        }
      }
    },

    filter: function(collection, cb) {
      result = []
      for (const element of collection) {
        if (cb(element)) {
          result.push(element)
        }
      }
      return result
    },
    
    size: function(collection) {
      return Object.keys(collection).length
    },

    first: function(collection, n = 1) {
      result = collection.slice(0, n)
      if( n === 1)  {
        return result[0]
      } else  {
        return result
      }
    },
    
    last: function(collection, n = 1) {
      result = collection.slice(-n)
      if( n === 1)  {
        return result[0]
      } else  {
        return result
      }
    },
    
    compact: function(collection) {
      result = []
      for(const element of collection)
      if(!!element) {
        result.push(element)
      }
      return result
    },

    sortBy: function(collection, cb) {
      collectionCopy = [...collection]
      // debugger
      for( let i = 0; i < collectionCopy.length; i++)  {
        for( let j = 0; j < collectionCopy.length - i; j++ ) {
          if(cb(collectionCopy[j]) > cb(collectionCopy[j+1])){
            let tmp = 0
            tmp = collectionCopy[j+1]
            collectionCopy[j+1] = collectionCopy[j]
            collectionCopy[j] = tmp
          }
        }
      }
      return collectionCopy
    },

    flatten: function(collection, shallow = false) {
      let result = []
      for(const element of collection)  {
        if(Array.isArray(element))  {
          if(!shallow){
            tmpArr = fi.flatten(element, shallow)
          } else  {
            tmpArr = element
          }
            for(const tmpEl of tmpArr){
              result.push(tmpEl)
            }
        } else  {
          result.push(element)
        }
      }
      return result
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
