/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
// We want to call the function after given time, but if the function is again called within the execution of first function then we want to prevent the previous call from happening
// We want to execute the latest function call since it have updated values
var debounce = function (fn, t) {
    let id;
    return function (...args) {
        clearTimeout(id);
        id = setTimeout(() => {
            fn(...args);
        }, t);
    };
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
