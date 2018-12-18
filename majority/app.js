/* Create a function majority that accepts an array and a callback. The callback will return either true or false.
majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true.
If the number of true returns is equal to the number of false returns, majority should return false.*/

function majority(arr, cb) {
  let trueC = 0
  let falseC = 0
  return arr.reduce(function(acc, val){
    // console.log('cb', cb(val))
    cb(val) ? trueC++ : falseC++
    console.log(trueC, falseC)

    if (trueC > falseC) {
      return true;
    } else if(trueC === falseC) {
      return false
    }
  }, 0)
}


var isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); //
