/* Question :
    A large number of people (50 or more) will go on a picnic. The number of buses will depend on the number of people. Suppose we have buses and micros. Each bus has a capacity of 50 people and each microbus has a capacity of 11 people and each public bus ticket costs Tk 250. If there are less than 11 people in the microbus, the microbus cannot go. Now you have to write a function called publicBusFare which will take a number (how many passengers) as a parameter. It will return you the total amount of public bus fare.
 */
/*
input numbers
50
55
112
235
365 
 */

function publicBusFare(participants) {
    if (typeof participants != 'number' || participants < 50) {
        return 'please valid participants..'
    }
    let busSeatCapacity = 50;
    let microSeatCapacity = 11;
    let ticketPrice = 250;
    let remaining = 0;
     // After calculating the amount of people who can travel by our bus
  // the value of remaining will be:-
    remaining = participants % busSeatCapacity;
    // After calculating the amount of people who can travel by our microbus
  // the value of remaining will be:-
    // Now calculate the total cost of public bus
    remaining = remaining % microSeatCapacity;
    let costOfPublicBus = remaining * ticketPrice;
    return costOfPublicBus;
}
 const costOfPublicBus = publicBusFare(235);
console.log(costOfPublicBus);