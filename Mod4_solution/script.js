// ******************************* 
// CODE OUTPUT INSTRUCTIONS
// *******************************
//
// Take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/

// SOLUTION

(function () { // Wrapped the entire contents of script.js inside of an IIFE

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) { // Looped over the names array saying either 'Hello' or "Good Bye" using the 'speak' method.
    
      var firstLetter = names[i].charAt(0).toLowerCase(); // Retrieved the first letter of the current name in the loop, using the string object's 'charAt' function.
      // Since we looked for names that start with either upper case or lower case 'J'/'j',
      // we called string object's 'toLowerCase' method on the result so we could compare to lower case character 'j' afterwards.
    
      if (firstLetter === 'j') { // Compared the 'firstLetter' retrieved above to lower case 'j'.
        byeSpeaker(names[i]);//If it was the same, it called byeSpeaker's 'speak' method with the current name in the loop.
      } else {
        helloSpeaker(names[i]); // Otherwise, it called helloSpeaker's 'speak' method with the current name in the loop.
      }
    }
    
})();
