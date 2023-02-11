module.exports = function reverse (n) {
  let arr1 = Math.abs(n).toString().split("");
  let arr2 = [];

  for (let i = arr1.length - 1; i >= 0; i--) arr2.push(arr1[i]);
  return Number(arr2.join(""));
  
  //return Number(Math.abs(n).toString().split("").reverse().join(""));
}