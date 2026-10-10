const lifespan = 1000;

function inputLifespan(){
    let input = prompt("Please enter how many hours you have used your space suit. A number between 0 and 1000 will do:");
    let hoursUsed = Number(input);

    function calculateLifespan(){
        if (Number.isNaN(hoursUsed) || hoursUsed < 0 || hoursUsed > 1000) {
            print("Please enter a valid number between 0 and 1000")
            return};
    
        if (hoursUsed >= 0 && hoursUsed < 800) {
            print("Your space suit is in working condition and does not require replacement.");
        } else if (hoursUsed >= 800 && hoursUsed < 995) {
            print("Your space suit meets the criteria for workplace safety but should be replaced soon. Be safe out there.");
        } else if (hoursUsed >= 995 && hoursUsed <= 1000) {
            print("Your space suit does not meet mission control's criteria for workplace safety. Please replace it immediately before planning another trip outside the station.");
    };

        print("Here's how many hours your suit has left before critical failure:");
        print(lifespan - hoursUsed);
    };
    
    return calculateLifespan();
};

inputLifespan();