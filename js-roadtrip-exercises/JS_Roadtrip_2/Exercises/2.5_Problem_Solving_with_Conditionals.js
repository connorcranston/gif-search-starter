// Video 2.4 accompanies this exercise

// Back at Miami Beach, scientists could see that the goldfish situation would
// quickly get out of control. They have decided that, for any month the
// goldfish population climbs above 10000, half of the goldfish will be sent
// away to other regions. Use the code below in your solution.
//
// Inside of our for loop, insert an if statement that:
//  - Removes half of the goldfish population if the number of goldfish rises
//    above 10,000.
//  - Prints the number of goldfish being removed to the console in the
//    following format: "Remove <number> goldfish from the population"
//
// Note: To complete the challenge, you only need to insert the if statement.
// You do not need to create an else statement or change any of the provided
// code.

var numGoldfish = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  <insert your code here>

  numGoldfish *= 4;
  console.log("There will be " + numGoldfish + " goldfish after " + monthNumber + " month(s)!");
}
