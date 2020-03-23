
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var newarr = [].concat(...matrix);
  matrix.flat(Infinity);
  return matrix.reduce((acc, val) => acc.concat(val), []);
}
