const wordReverse = str => str.split(' ').map(wordItem => wordItem.split('').reverse().join('')).join(' ')

console.log(wordReverse(" A fun little challenge! "))

// node 4_wordReverse.js