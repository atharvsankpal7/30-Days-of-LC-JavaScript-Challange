/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let n=init;
    //This returns an object with functions increment, decrement and reset whose return values are ++n, --n and init(the returned value should be same as the recieved one) 
    //We have used the preincrement operator since we want to change the value before returning
    return {
        increment: () => ++n,
        decrement: () => --n,
        reset: ()=> ( n = init),
    };
       
      
  };
  
  /**
   * const counter = createCounter(5)
   * counter.increment(); // 6
   * counter.reset(); // 5
   * counter.decrement(); // 4
   */