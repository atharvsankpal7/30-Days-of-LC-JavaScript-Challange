 /**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    //Declarative programming
    return arr.filter(fn);
    //Imperative programming
    const arr1 = []
    arr.forEach((e,i)=>{
        if(fn(e,i)){
            arr1.push(e)
        }
    })
    return arr1;
};