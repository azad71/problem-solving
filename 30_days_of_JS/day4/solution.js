// editorial: https://leetcode.com/problems/apply-transform-over-each-element-in-array/editorial/

var map = function (arr, fn) {
  let newArr = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = fn(arr[i], i);
  }

  return newArr;
};
