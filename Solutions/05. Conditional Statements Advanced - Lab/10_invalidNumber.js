function invalidNumber(input) {
    number = Number(input[0]);

    if(number < 0 || (number > 0 && number < 100) || number > 200)
    console.log("invalid");
}