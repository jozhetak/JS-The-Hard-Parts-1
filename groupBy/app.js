// Create a function groupBy that accepts an array and a callback, and returns an object.
// groupBy will iterate through the array and perform the callback on each element.
// Each return value from the callback will be saved as a key on the object.
//  The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.


function groupBy(arr, cb) {
  return arr.reduce(function(acc, index) {
    acc[cb(index)] = [index]
    return acc
  }, {}, 0)
}

var decimals = [1.3, 2.1, 2.4];
var floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
