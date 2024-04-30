question 1: the bug in the code is that it doesn't type check if the two inputs are 
actually both numbers, no matter what the input is, the code concatenates the inputs 
together and treats them like strings.

question 2: I would fix it by adding a type checker in the beggining, by putting 
an if statement in the calculateSum function which throws an error if both inputs are not numbers.
