class LRUCache {
    constructor(capacity = 2) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }

        if(this.cache.size === this.capacity) {
            const firstkey = this.cache.keys().next().value;
            this.cache.delete(firstkey);
        }

        this.cache.set(key, value);
    }

    get(key) {
        if (!this.cache.has(key)) return -1;

        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }
}

const cache = new LRUCache(2);
cache.put(1,1);
cache.put(2,2);
console.log(cache.get(1));
console.log(cache.get(2));
cache.put(3,3);
console.log(cache.get(3));
console.log(cache.get(1));



