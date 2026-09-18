const numOfFrogs = 15;
let frogAmount = prompt("How many frogs can you see in our pond?");
let entryGranted = frogAmount < numOfFrogs;

let message1 = entryGranted ? "Come on in, Sonion Sam" : "Get lost chump, can't you count?";
let message2 = entryGranted ? "We've got room for one more" : "Go get a music degree or something";

print(message1);
print(message2);