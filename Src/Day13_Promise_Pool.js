/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function (functions, n) {
    // returns the new promise
    return new Promise((resolve, reject) => {
        let i = 0;
        let progressCount = 0;
        function callback() {
            //This means that all of the promises inside the functions has been initialised and the progressCount becomes zero that mean all of the promises have been resolved
            //The base case is not `i === functions.length - 1` since the `i` gets incremented each time the function inside the `functions` array is called.
            if (i === functions.length && progressCount === 0) {
                resolve();
            }
            //We iterate through the elements of the `functions` but make sure that we are only iterating while the `progressCount` is less than the `n` since it starts from 0 we don't need to make sure `progressCount <= n`
            while (i < functions.length && progressCount < n) {
                //Calling the function inside the `functions` and incrementing the i later
                functions[i++]()
                    //This will be asynchrounous action since we are waiting for the called promise to be resolved
                    //After the called promise is resolved
                    .then(() => {
                        //Decrementing the progressCount since the promise has been resolved
                        progressCount--;
                        //Calling the `callback` function recursively
                        callback();
                    });

                //as soon as the function is called we will make sure that `progressCount` is incremented
                progressCount++;
            }
            //end of loop
        }
        // Invoking the execution of the `callback`
        callback();
    });
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */
