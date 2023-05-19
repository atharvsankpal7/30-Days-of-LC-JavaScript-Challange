/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function (functions, n) {
    return new Promise((resolve, reject) => {
        let i = 0;
        let progressCount = 0;
        function callback() {
            if (i === functions.length && progressCount === 0) {
                resolve();
            }
            while (i < functions.length && progressCount < n) {
                functions[i++]()
                    .then(() => {
                        progressCount--;
                        callback();
                    });
                progressCount++;
            }
        }
        callback();
    })
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */