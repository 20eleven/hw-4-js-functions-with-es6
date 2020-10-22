const largest = (...args) => args.reduce((a, b) => Math.max(a, b))

const smallest = (...args) => Math.min(...args)

console.log(largest(2, 0.1, -5, 100, 3))
console.log(smallest(2, 0.1, -5, 100, 3))

// node 6_largestSmallest.js