function posswordGuess(input) {
    let pass = 's3cr3t!P@ssw0rd';
    let enteredPass = input[0];
    if (pass == enteredPass){
        console.log(`Welcome`);
    } else console.log(`Wrong password!`);
}