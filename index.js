function isPalindrome(word) {
let reversedStr = word.split("").reverse().join("");
return reversedStr == word;
}

/* 
  Add your pseudocode here
declare a variable called reversedStr and reverse the passed in string

after js iterates over the reversed string if the string is a palindrome then return true

otherwise return false
*/

/*
  Add written explanation of your solution here
  First, I decalred a variable called reversedStr and assigned an expression to it.
  In this expression, I took the passed in string or ("word"). Then I
  used the split method to split the characters of the passed in string and reversed their order.
  Last, I joined the reversed string back together into a string using the join() method.
  THen i returned the reversedStr variable to loosely equate to the passed in string or ("word")
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log("Expecting: true");
  console.log("=>", isPalindrome("dad"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("step"))

  //Above are my own tests! 


  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
