// Video 2.6 accompanies this exercise

// We’ve made a significant difference, but there are still too many goldfish
// for the fragile Miami Beach ecosystem. The oceanologists would like you to
// implement the following new plan for population reduction:
//
//  - If the month is a multiple of 4, then find 75% of the goldfish
//    population. Log that value to the console in the format below.
//    Then, remove that value from the total number of goldfish.
//
//  - Otherwise, if the population is above 10000, find half of the goldfish
//    population. Log that value to the console in the format below. Then,
//    remove that value from the total number of goldfish.
//
// Use this format for logging goldfish reduction:
//
//      Removing <number> goldfish from the population.
//
// Use the code below in your soluton.
//
// Note: To complete the challenge, you only need to insert an if statement
// and an else if statement. You do not need to create an else statement at
// the bottom or change any of the provided code.

var numGoldfish = 4;
var monthsToPrint = 12;

for (var monthNumber = 1; monthNumber <= monthsToPrint; monthNumber++) {

  <if statement goes here>

  <else if statement goes here>

  numGoldfish *= 4;
  console.log("There will be " + numGoldfish + " goldfish after " + monthNumber + " month(s)!");
}
