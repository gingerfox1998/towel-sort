
// You should implement your task here.

module.exports = function towelSort (matrix) {
  matrix.flat();
  matrix.reduce((acc, val) => acc.concat(val), []);
  return matrix.sort((a, b) => a - b);
}
