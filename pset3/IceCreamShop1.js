const iceCreamPrice = 10;
let payment = prompt("Oh you're here for ice cream? How much money do you have chump?");

if (payment >= iceCreamPrice){
    print("Hey that's enough for our weekly special flavour. Here you go, enjoy!");
} else {
    print("Yeah that's not gonna cut it bud, go sell some lemonade or something");
}

if (payment >= iceCreamPrice){
    print("Here's your change pal, thanks for shopping:");
    print(payment - iceCreamPrice);
}