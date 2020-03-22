
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var newarr = [];
  var p = 0;
  for(i = 0; i < matrix.length; i++) {
    for(j = 0; j < matrix[i].length; j++) {
        newarr[p] = matrix[i][j];
        p++;
    }
  }
  return newarr.sort((a, b) => a - b);
}
