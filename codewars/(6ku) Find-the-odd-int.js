/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.


*/
function findOdd(A) {

  for( let i = 0; i < A.length; i++){ 
    let currentNum = A[i]; 
    let oddCounter = 0; 

         for( let  j = 0; j < A.length; j++){ 
 
           let comparisonNum = A[j]; 
               if( currentNum === comparisonNum ){
                oddCounter ++
                }
          };
    
          if( oddCounter % 2 === 1){
          return currentNum;
         } else {
           oddCounter = 0;
           continue;
         }
      }
  
  };