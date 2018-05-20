module.exports = exports = {};

exports.add = function(x, y) {
  var sum;
  if(typeof x !== 'number' || typeof y !== 'number') {
    return null;
  }
  sum = x + y;
  return sum;
};

exports.sub = function(x, y) {
  var difference;
  if(typeof x !== 'number' || typeof y !== 'number') {
    return null;
  }
  difference = x - y;
  return difference;
};