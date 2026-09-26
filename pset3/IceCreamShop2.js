const conesPerHour = 14;
const inventory = 160;

for(let hour = 0; hour < 12; hour++){
    let coneSale = conesPerHour * hour;
    print(coneSale + " cones sold at hour " + hour);
    
    let leftOver = inventory - coneSale;
    print("We have " + leftOver + " cones left");
}