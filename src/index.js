
// You should implement your task here.

module.exports = function towelSort (matrix) {
  matrix.flat();
  return matrix.reduce((acc, val) => acc.concat(val), []);
}
