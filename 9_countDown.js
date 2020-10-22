const countDown = num => {  
   let current = num
   const timer = setInterval(() => {
      console.log(current)
      if (current == 0) {
         clearInterval(timer)
      }
      current-- 
   }, 1000)
}

countDown(3)

// node 9_countDown.js