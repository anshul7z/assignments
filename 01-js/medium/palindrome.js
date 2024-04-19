/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  //convert the string to lowercase and remove all the special ch and spaces usnig regex
  str=str.toLowerCase().replace(/[\s~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, '');
  //length of the string
  n=str.length;
  let front=0;
  let end=n-1;
  while(front<=end){
    if(str[front]!=str[end]){
      return false;
    }
    front++;
    end--;
  }
  return true;
}

console.log(isPalindrome("Eva, can I see bees in a cave?"));

module.exports = isPalindrome;
