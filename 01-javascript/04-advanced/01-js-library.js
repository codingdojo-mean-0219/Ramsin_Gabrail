const _ = {
    map: function(arr, callback) {
      for (let x = 0; x < arr.length; x++) {
        arr[x] = callback(arr[x]);
      }
    },
    reduce: function(arr, callback, memo){
        let el = 0;
        if (!memo){
          memo = arr[0];
          el = 1;
        }
        for (let x = el; x < arr.length; x++) {
          memo = callback(arr[x], memo);
        }
        return memo;
  
    },
    find: function(arr, callback) {
      for (let x = 0; x < arr.length; x++) {
        if (callback(arr[x])){
          return arr[x];
        }
      }
    },
    filter: function(arr, callback) {
      const new_arr = [];
      for (let x = 0; x < arr.length; x++) {
        if (callback(arr[x])) {
          new_arr.push(arr[x]);
        }
      }
      return new_arr;
    },
    reject: function(arr, callback) {
      const new_arr = [];
      for (let x = 0; x < arr.length; x++) {
        if (!callback(arr[x])) {
          new_arr.push(arr[x]);
        }
      }
      return new_arr;
    },
  }
  
const arr = [0, 1, 2, 3, 4, 5];
_.map(arr, function callback(x) {return x * 3;});
console.log(arr);
console.log(_.filter(arr, function(x) {return x < 15;}));
console.log(_.reduce(arr, function callback(x, memo) {return x + memo;}));
console.log(_.find(arr, function callback(x) {return x === 5;}));

  

