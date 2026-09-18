const activities = [
    "Babysit and feed the tadpoles so Jerry doesn't get any ideas",
    " Catch some flies for lunch and have a siesta",
    " Stretch them tongues out and add new adhesive goop",
    " Tell mom to give the froglets a swimming lesson and crack open a cold one",
    "Kick your feet up, order one of our premium pre-rolls, and smoke your day away"
];

let selectedActivity = prompt("Hi! You're a frog and your life is basically meaningless. Feel free to pick a number between 0 and 4 (or higher) to be assigned one of a few meaningless frogtivities");

if (selectedActivity == 0){
    print(activities[0]);
} else if (selectedActivity == 1){
    print(activities[1]);
} else if (selectedActivity == 2){
    print(activities[2]);
} else if (selectedActivity == 3){
    print(activities[3]);
} else if (selectedActivity >= 4 && selectedActivity < 420){
    print(activities[0]);
} else if (selectedActivity == 420){
    print(activities[4]);
} else {
    print(activities[0]);
}
    

print("Thank you for another meaningless contribution to Frogville");