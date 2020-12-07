/*
You will be given a string and your task is to check if it is possible to convert that 
string into a palindrome by removing a single character. 
If the string is already a palindrome, return "OK". If it is not, and we can convert it
to a palindrome by removing one character, then return "remove one", otherwise return "not possible". 
The order of the characters should not be changed.

For example:

solve("abba") = "OK". -- This is a palindrome
solve("abbaa") = "remove one". -- remove the 'a' at the extreme right. 
solve("abbaab") = "not possible". 

*/

function solve(s){
  
  let reversedStr = s.split('').reverse().join('')
  
  if( reversedStr === s){
    return 'OK'
  } else {

    let newStr = s.split('') 
    for(let i = 0; i < newStr.length;i++){ //i = 3 , element: a
      newStr.splice(i,1) 
      let reversedNewWord = newStr.slice().reverse() 
      if(reversedNewWord.join('') === newStr.join('')) {
        return 'remove one'
      } else {
        newStr = s.split('')
        continue;}
    
    }
    
    return 'not possible'
  }
   
  
}