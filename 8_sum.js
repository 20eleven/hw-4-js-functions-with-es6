const sum = (...args) => {
   let arrLength = args.length - 1
   if (arrLength === 0) {
      return args[arrLength]      
   }
   return args[arrLength] + sum(...args.slice(0, arrLength))
}

console.log(sum(1, 3, 5, 7))

// node 8_sum.js