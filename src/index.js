
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var newarr = [];
  var p = 0;
  for(i = 1; i < matrix.length; i++) {
    for(j = 0; j < matrix[i].length; j++) {
        newarr[p] = matrix[i][j];
        p++;
    }
  }
  var result = [].convat(...matrix);
  return result;
}
