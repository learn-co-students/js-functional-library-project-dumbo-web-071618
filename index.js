fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {

      for (let key in collection) {
        callback(collection[key], key, collection);
      }
      return collection
    },

    map: function(collection, callback) {
      let newArr = [];
      let newCollect;

      if (Array.isArray(collection)) {
        newCollect = [...collection];
      } else {
        newCollect = Object.assign({}, collection);
      }

      for (let element in newCollect) {
        // debugger;
        newArr.push(callback(newCollect[element]));
      }
      return newArr;
    },

    reduce: function(collection, callback, acc = 0) {
      for (let element in collection) {
        acc = callback(acc, collection[element]);
      }
      return acc
    },

    find: function(collection, predicate) {
      for (var element in collection) {
        if (predicate(collection[element])) {
          return collection[element];
        }
      }
    },

    filter: function(collection, predicate) {
      let newArr = [];
      for (var element in collection) {
        if (predicate(collection[element])) {
          newArr.push(collection[element]);
        }
      }
      return newArr;
    },

    size: function(collection) {
      let i = 0;
      for (let element in collection){
        i++;
      }
      return i;
    },

    first: function(collection, n = 0){
      let numberArr = [];
      if (n === 0) {
        return collection[0];
      }
      for (let i = 0; i < n; i++) {
        numberArr.push(collection[i]);
      }
       return numberArr;
    },

    last: function(collection, n = 0) {
      let numberArr = [];
      if (n === 0) {
        return collection[collection.length - 1];
      }
      for (let i = 1; i < n + 1; i++) {
        numberArr.unshift(collection[collection.length - i]);
      }
      return numberArr;
    },

    compact: function(array){
      let newArray = [];
      for (let element in array) {
        if (!!array[element]) {
          newArray.push(array[element]);
        }
      }
      return newArray;
    },

    sortBy: function(array, callback) {
      let newArr = [...array]
      return (newArr.sort(function (a, b) {
        return callback(a) - callback(b);
      }));

    },

    flatten: function(array, shallow) {
      let newArr = [];
      for (let element in array) {
        if (typeof array[element] === "object" ) {
          return this.flatten(array[element]);
        } else {
          newArr.push(array[element]);
        }
      }
      return newArr;
    },
    boop: function(){

    },
    boop: function(){

    },
    boop: function(){

    },
    boop: function(){

    },
    boop: function(){

    }






























  }
})()

fi.libraryMethod()
