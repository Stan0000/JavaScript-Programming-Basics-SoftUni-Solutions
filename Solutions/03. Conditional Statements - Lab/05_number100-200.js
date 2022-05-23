function number100To200(input) {
    let enteredNumber = Number(input[0]);
    if (enteredNumber >= 100 && enteredNumber <= 200){
        console.log("Between 100 and 200");
    }
     else if(enteredNumber < 100){
        console.log(`Less than 100`);
    } else if(enteredNumber > 200){
        console.log(`Greater than 200`);
    }
}