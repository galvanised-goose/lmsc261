function randomActivity(){
    const dailyActivities = [
        "clean solar panels on the eastern wing and try not to get untethered",
        "clean solar panels on the western wing and I hope you get unte@!%4&... I mean try not to get untethered!",
        "wash your dishes you lazy prick",
        "eject yesterday's fecal matter into the sun",
        "hydrate the grow beds so your crew doesn't starve",
        "video call your family and catch up, don't be such an ungrateful sod",
        "light up a Mars joint or a Venus joint. I don't know nor do I care, just don't get caught",
        "learn some Russian to communicate with your neighbours about more than just the weather"
    ];

    let randomIndex = Math.random() * dailyActivities.length;
    let randomActivity = Math.floor(randomIndex);

    return dailyActivities[randomActivity];
};

print("Your activity for today is to " + randomActivity());