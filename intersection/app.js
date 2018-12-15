/* Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce! */

function intersection(arr) {
  // console.log(arr)
  return arr.reduce(function(acc, array) {
    console.log('acc', array)
    return acc.filter(function(el) {
      // console.log('el', el, array.indexOf(el) !== -1)
      return array.indexOf(el) !== -1
    })
  })
}


var arr1 = [5, 10, 15, 20];
var arr2 = [15, 88, 1, 5, 7];
var arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
