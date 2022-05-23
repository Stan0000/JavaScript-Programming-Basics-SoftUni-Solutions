function vacationBooksList(input) {
    let bookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);
    let reading = bookPages / pagesPerHour;
    let hoursPerDay = reading / days;
    console.log(hoursPerDay);
}