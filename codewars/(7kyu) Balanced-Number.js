/*
Definition
Balanced number is the number that * The sum of all digits to the left of the middle digit(s) and the sum of all digits to the right of the middle digit(s) are equal*.

Task
Given a number, Find if it is Balanced or not .


*/

function balancedNum(number){
number = number.toString();
  if(number.length % 2 === 1){
    let sumOfLeft = 0 //9
    let sumOfRight = 0
    

       
       let middleIndex = (number.length -1)/2
       
       for(let i = 0; i < middleIndex; i++){
         sumOfLeft += Number(number[i])
       }  
        for( let i = number.length - 1; i > middleIndex; i-- ){
          sumOfRight += Number(number[i])
        }
    

    if(sumOfRight === sumOfLeft){
      return 'Balanced'
    } else {
      return 'Not Balanced'
    }
    
  }
  
        
  
      if( number.length % 2 === 0){
        
         if( number.length === 2){
          return 'Balanced'
        } 
        
        let sumOfRight = 0
        let sumOfLeft = 0
        
        number = number.toString();
        
        let middleIndex1 = (number.length/2) - 1
        let middleIndex2 = number.length/2
        
        for ( let i = 0; i < middleIndex1;i++){
          sumOfLeft += Number(number[i])
        }
        
        for ( let i = number.length - 1; i > middleIndex2; i--){
          sumOfRight += Number(number[i])
        }
        
        if(sumOfRight === sumOfLeft){
          return "Balanced"
        } else {
          return "Not Balanced"
        }
      }
  
}