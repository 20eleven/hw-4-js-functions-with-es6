const splitAndMerge = (str, sp) => str.split(' ').map(wordItem => wordItem.split('').join(sp)).join(' ')

console.log(splitAndMerge("My name is John", " "))
console.log(splitAndMerge("Hello World!", ","))

// node 1_splitAndMerge.js 