// ADD CODE HERE

function goodKeys (obj, callback) {
  let res = [];
  for (var keys in obj) {
    console.log(callback(obj[keys]))
    if(callback(obj[keys])) {
      res.push(keys)
    }
  }
  return res
}

// Uncomment these to check your work!
var sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
