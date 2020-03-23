
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var newarr = [].concat(...matrix);
  newarr.sort(function(a, b) {
    return a - b;
  })
}
