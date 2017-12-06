// Video 4.6 accompanies this exercise

// Back at the Dinger Dam, the technicians have decided they want more control
// of which generators are on and off. So, they’ve asked you to develop a way
// to adjust the total megawatts generated upon the switch-on or switch-off of
// a single, chosen generator.
//
// Build a function named changePowerTotal that takes in four parameters:
//
//  - The total power generated (a number)
//  - The generator ID for the current generator (a number)
//  - The generator status (a string that says "on" or "off")
//  - The amount of power produced by the current generator (a number)
//
// Your function should:
//
//  - If the current generator is set to "on", then add to the total power
//    generated.
//  - Or if the current generator is set to "off", then remove from the total
//    power generated.
//  - return the total power generated.
//  - alert the technician in the following formats:
//
// For switching on:
//
//      "Generator #2 is now on, adding 62 MW, for a total of 62 MW!""
//
// For switching off:
//
//      "Generator #2 is now off, removing 62 MW, for a total of 0 MW!""
//
// Note: You do not need to call the function. Build the function declaration
// without invoking it.
