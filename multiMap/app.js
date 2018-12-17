

function multiMap(valArr, callbackArr) {
  return valArr.reduce(function(acc, words, index) {
    acc[words] = callbackArr.reduce(function(acc, cb) {
      acc.push(cb(words))
      return acc
    }, [])
    return acc;
  }, {})
}

function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
var items = ['catfood', 'glue', 'beer'];
var functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }, 'Beer', 'beerbeer'] }
