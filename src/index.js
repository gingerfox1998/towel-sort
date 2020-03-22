
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var newarr = [];
  for(i = 0; i < matrix.length; i++) {
    for(j = 0; j < matrix[i].length; j++) {
        newarr.push(matrix[i][j]);
    }
  }
  var res = [].concat(...matrix);
  return res.sort((a, b) => a - b);
}
