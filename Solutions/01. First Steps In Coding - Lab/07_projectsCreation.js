function projectsCreation(input) {
    let name = input[0];
    let project = Number(input[1]);
    let hours = project * Number(3);
    console.log(`The architect ${name} will need ${hours} hours to complete ${project} project/s.`);
}