function lattice(col, row) {
    if (col === 0 && row === 0) {
        return 0;
    }
    if (col === 0 || row === 0) {
        return 1;
    }
    return lattice(col - 1, row) + lattice(col, row - 1)
}

function memoize(fn) {
    const cache = {};
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }
        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    }
}

lattice = memoize(lattice);

console.log(lattice(20, 20)) // 137846528820