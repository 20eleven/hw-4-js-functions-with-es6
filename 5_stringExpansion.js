const stringExpansion = str => {
   let arr = []
   let newStr = []
   let num = 0
   let sym = ''
   str.split('').forEach(char => {
      isNaN(Number(char)) ? arr.push(char) : arr.push(+ char)
   })
   arr.map(item => {  
      if (typeof item === 'string') { sym = item }
      if (typeof item === 'number') { num = item }  
      newStr.push(sym.repeat(num))  
      if (!num) { newStr.push(sym) }
      sym = ''  
   })
   return newStr.join('')
}

console.log(stringExpansion('3D2a5d2f'))
console.log(stringExpansion('3d332f2a'))
console.log(stringExpansion('abcde'))

// node 5_stringExpansion.js