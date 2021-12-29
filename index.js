function reverse(word) {

  // const wordArray = word.split('');
  // const reversedWordArray = wordArray.reverse();
  // const reversedWord = reversedWordArray.join("");
  // return reversedWord;
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  const reversedWord = reverse(word);

  return word === reversedWord;
}




/* 
  
  Reverse the Input String 

  if the input is the same as the reverse input 
    return true
  else 
    return false
    
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  if (require.main === module) {
    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));

    console.log("");

    console.log("Expecting: true");
    console.log("=>", isPalindrome("mom"));

    console.log("");

    console.log("Expecting: true");
    console.log("=>", isPalindrome("abba"));

    console.log("");

    console.log("Expecting: true");
    console.log("=>", isPalindrome("a"));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", isPalindrome("hi"));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
  }


  module.exports = isPalindrome;
}