var TimeLimitedCache = function () {
    this.cache = new Map();
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
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
};

TimeLimitedCache.prototype.get = function (key) {
    // Checks for the key in cache and returns the value for corresponding key
    if (this.cache.has(key)) {
        return this.cache.get(key).value;
    }
    // Returns -1 if value is not present in the cache
    return -1;
};

TimeLimitedCache.prototype.count = function () {
    // Returns the size of map
    return this.cache.size;
};
