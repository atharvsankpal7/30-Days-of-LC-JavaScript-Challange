/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {

    arr.forEach((e,i)=>{
        arr[i]=fn(e,i);
    })
    return arr;
};