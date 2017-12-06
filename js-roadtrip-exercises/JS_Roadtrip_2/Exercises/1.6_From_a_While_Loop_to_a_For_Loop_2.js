// Video 1.4 accompanies this exercise

// In the code below, morph the while loop
// into a for loop that uses the same variable names. Remember, you’ll still
// need to declare the starting number of goldfish and the number of months to
// print outside the loop. We’ve given you the starting number of goldfish
// again, as well as the amount of months you’ll need to print out for use in
// the loop parameters.

var numGoldfish = 4;
var monthsToPrint = 12;

while(monthNumber <= monthsToPrint) {

  numGoldfish *= 4;

  console.log("There will be " + numGoldfish + " goldfish after " + monthNumber + " month(s)!");

  monthNumber++;
}
