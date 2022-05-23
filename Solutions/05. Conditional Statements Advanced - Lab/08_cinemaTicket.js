function cinemaTicket(input) {
    let dayOfTheWeek = input[0];

    switch(dayOfTheWeek){
        case "Monday": 
        case "Friday":
        case "Tuesday": console.log(12); break;
        case "Wednesday":
        case "Thursday": console.log(14); break;
        case "Saturday":
        case "Sunday": console.log(16); break;
        default: console.log("Error"); break;
    }
}