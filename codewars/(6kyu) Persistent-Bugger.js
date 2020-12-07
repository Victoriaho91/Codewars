/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:

 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number
*/

function persistence(num) {
   let multiplierCount = 0; //2
  
    num = num.toString()
    let arrayOfStrNum = num.split('') 
    let arrayOfNum = []
    
    arrayOfStrNum.forEach(function(element){
      arrayOfNum.push(parseInt(element))
    })
  
    
     if(num.length === 1){
      return multiplierCount;
     } else {   
 
       let product = 1 
       
       for(let i = 0; i < arrayOfNum.length; i++){ 
         let currNum = arrayOfNum[i]
         product *= currNum
         
       }

       multiplierCount++
       let result = persistence(product) 
       multiplierCount += result
    
      }
  
  return multiplierCount; 
}