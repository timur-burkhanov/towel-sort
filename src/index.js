
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  let arr = [];
  for (let i=0; i<matrix.length; i++){
    console.log(matrix[i]);
    if (i%2 == 0) arr = arr.concat(matrix[i]);
    else arr = arr.concat(matrix[i].reverse());
  }
  return arr;
}
