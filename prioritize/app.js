// Create a function prioritize that accepts an array and a callback. The callback will return either true or false.
//  prioritize will iterate through the array and perform the callback on each element, and return a new array,
//   where all the elements that yielded a return value of true come first in the array, and the rest of the elements come second.

function prioritize(arr, cb) {
  let trueArr = []
  let falseArr = []
  return arr.reduce(function(acc, val) {
    if(!cb(val)) {
      falseArr.push(val)
    } else {
      trueArr.push(val)
    }
    return trueArr.concat(falseArr)
  }, 0)
}

function startsWithS(str) { return str[0].toLowerCase() === 's'; }
var tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
console.log(prioritize(tvShows, startsWithS)); //
