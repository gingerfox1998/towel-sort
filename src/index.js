
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var result = [];
  for(i = 1; i < matrix.length; i++) {
    result = result.concat(matrix[i - 1]);
  }
  return result.sort((a, b) => a - b);
}
