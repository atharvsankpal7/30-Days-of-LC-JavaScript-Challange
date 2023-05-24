// This code uses class to tackle the problem
class TimeLimitedCache {
    cache = new Map();

    set(key, value, duration) {
        const alreadyExist = this.cache.get(key);
        // Clears the timeout if key value pair already exists in the cache
        if (alreadyExist) {
            clearTimeout(alreadyExist.TimeoutId);
        }
        // Deletes the key value pair after given duration
        const TimeoutId = setTimeout(() => {
            this.cache.delete(key);
        }, duration);
        // sets the key value pair in the map as
        // `key` = `key`
        // `value` = (object){value: value, TimeoutId : TimeoutId} //Note that the object is also has key value pair which can be shorthanded in the following line
        this.cache.set(key, { value, TimeoutId }); //Sets the key value pair in cache
        return Boolean(alreadyExist); // return true if the value is overwritten and false if newly created
    }

    get(key) {
        // Checks for the key in cache and returns the value for corresponding key
        let returnValue = this.cache.get(value); //This will return undefined if the key value pair is not present and if it is then it will return `value` from cache which will be our object in this case
        if (returnValue) {
            // Return the value attribute from our object
            return returnValue.value;
        }
        // Returns -1 if value is not present in the cache
        return -1;
    }

    count() {
        // Returns the size of map
        return this.cache.size;
    }
}
