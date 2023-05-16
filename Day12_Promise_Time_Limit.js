/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
// var timeLimit = function (fn, t) {
//     return async function (...args) {

//         return new Promise((resolve, reject) => {
//             const id = setTimeout(() => { reject("Time Limit Exceeded") }, t);
//             //since the fn is asynchronous function it will return the promise which can be utilised for our use
//             //.then will have the resolve function of promise that was returned by the `fn` function
//             fn(...args)
//                 .then((res) => { resolve(res) })
//                 .catch((err) => { reject(err) })
//                 .finally(() => { clearTimeout(id) })


//         })
//     }
// };
var timeLimit = function (fn, t) {
    return async function (...args) {

        return new Promise(async (resolve, reject) => {
            const id = setTimeout(() => { reject("Time Limit Exceeded") }, t);

            try {
                const res = await fn(...args)
                resolve(res);
            } catch (err) {
                reject(err)
            } finally {
                clearTimeout(id);
            }
           

        })
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
*/