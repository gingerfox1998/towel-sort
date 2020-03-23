
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var result = [];
  for(i = 1; i <= matrix.length; i++) {
    if(i % 2 == 0)
        result = result.concat(matrix[i - 1].reverse());
    else
        result = result.concat(matrix[i - 1]);
  }
  return result;
}
