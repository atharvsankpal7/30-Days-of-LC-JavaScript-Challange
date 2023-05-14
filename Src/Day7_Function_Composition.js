/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        //reduce in reverse order
         return functions.reduceRight((x1,f) => f(x1),x);
         //reduceRight takes two parameters first as element of the array and second as value and it passes that value to the input function and returned value is update as second value and again the same process is happened with rest of the elements
    }
/**
    *return function(x) {
    *    for(let i=functions.length-1;i>=0;i--){
    *        x = functions[i](x);
    *    }
    *return x;
    *}
*/
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */