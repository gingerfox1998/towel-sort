
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var newarr = [];
  var res = [];
  for(i = 0; i < matrix.length; i++) {
    for(j = 0; j < matrix[i].length; j++) {
        newarr = newarr.push(matrix[i][j]);
    }
  }
  newarr.sort(function(a, b) {
    return a - b;
  })
}
