// Video 2.6 accompanies this exercise

// The people at the Dinger Dam have called you back, and would like a
// program that shows what happens when only the even numbered turbines are
// turned on. And they want it all in just one for loop.
//
// With a set of complex conditional statements inside the loop, construct
// a way to only turn on even numbered turbines. Remember our power output
// situation:
//  - Generators 1 through 4 produce 62 MW
//  - Generators 5 through 19 produce 124 MW
//
// The output should follow this format:
//
//      Generator #1 is off.
//      Generator #2 is on, adding 62 MW, for a total of 62 MW!
//
// We’ve given you some starting variables to use in your build. Within your
// loop, consider the possible scenarios when building your conditions:
//  - The Generator provides 62 MW of power
//  - The Generator provides 124 MW of power
//  - The Generator is off
//
// Use the code below in your solution.

var totalGen = 19;
var totalMW = 0;
