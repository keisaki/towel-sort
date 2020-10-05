
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr = [];
  if(matrix == undefined||matrix.length < 1){
      return newArr;
  }
  for(let  i = 0;i<matrix.length;i++)
  {
    newArr = i%2==0? newArr.concat(matrix[i]):newArr.concat(matrix[i].reverse());    
  }
  return newArr;
}
