const transform = arr => arr.map(srcItem => () => srcItem)

const baseArray = [10, 20, 30, 40, 50]
const newArray = transform(baseArray)
console.log(newArray[3]())
console.log(newArray[4]())

// node 7_transform.js