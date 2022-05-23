function suppliesForSchool(input) {
    let pencils = Number(input[0]) * 5.8;
    let markers = Number(input[1]) * 7.2;
    let preparationInLiters = Number(input[2]) * 1.2;
    let discount = Number(input[3]) / 100;
    let sum = (pencils + markers + preparationInLiters) - ((pencils + markers + preparationInLiters) * discount)
    console.log(sum);
}