 /**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if(nums.length === 0)
        return init;
    
    // return nums.reduce(fn,init)

    nums.forEach((e,i)=>{
        init=fn(init,e);
    })
    return init;
    
};s