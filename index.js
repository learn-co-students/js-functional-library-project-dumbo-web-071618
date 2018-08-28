fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, alert) {
      for (let element in collection){
        //console.log(collection[element]);
        alert(collection[element]);
      }
      return collection;
    },

    map: function(collection, callback) {
      let newArr = [];
      // for (let i = 0; i < collection.length; i++) {
      //   newArr = newArr.push(collection[i] * 3)
      // }
      // return newArr
      for (let element in collection){
         //console.log(collection[element]*3);
         newArr.push(callback(collection[element]));
       }
       return newArr;
    },

    reduce: function(collection, callback, acc=0) {
      // collection an array obj
      // call back function
      // acc is accumulator
      // acc = 0
      for (let element in collection){
        acc = callback(acc, collection[element]);
      }
      return acc;

    },

    find: function(collection, predicate) {
      // |predicate| something like in ruby
      for (let element in collection){
        if (predicate(collection[element])){
          return collection[element];
        }
      }
    },

    filter: function(collection, predicate) {
      newArr = []
      for (let element in collection){
        if (predicate(collection[element])) {
          newArr.push(collection[element])
        }
      }
      return newArr
    },

    size: function(collection) {
      counter = 0
      for (let element in collection) {
        counter++
      }
      return counter
    },

    first: function(array, n) {
      // for (let element of array) {
      //   return element.slice(0, n+1)
      // }
      if (n === undefined){
        return array[0];
      } else {
        newArr = [];

        for (let i = 0; i < n; i++){
          newArr.push(array[i]);
        }

        return newArr;
      }

    },

    last: function(array, n) {
      if (n === undefined){
        return array.slice(-1)[0];
        //[4] to equal 4
      }
      else {
        return array.slice(-n)
      }
    },

    compact: function(array) {
      newArr = [];
      for(let element in array){
        //console.log(!!array[element]);
        //console.log(array[element]);
        if (!!array[element] !== false){
          newArr.push(array[element]);
        }

      }
      return newArr;
    },

    //sortBy: function(array, callback) {

    //},

    //flatten: function(array, [shallow]) {

    //},

    //uniq: function(array, [isSorted], [callback]) {

    //},

    keys: function(object) {
      key_arr = []
      for(let key in object){
        key_arr.push(key)
      }
      return key_arr
    },

    values: function(object) {
      value_arr = []
      for(let key in object){
        value_arr.push(object[key])
      }
      return value_arr
    }

  }
})()

fi.libraryMethod()
