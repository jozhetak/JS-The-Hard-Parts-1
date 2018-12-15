/*Create a function forEach which takes an array and a callback, and runs the callback on each element of the array.
forEach does not return anything. Please do not use the native forEach or map method.

Now let's rebuild map from challenge 1. This time instead of using a for loop, you're going to use the forEach we just created. */

function forEach(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    callback(arr[i])
  }
}

function map(arr, callback) {
  let res = [];
  forEach(arr, function(el) {
    res.push(callback(el))
  })
  return res
}

console.log(typeof forEach); // should log: 'function'
forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]
