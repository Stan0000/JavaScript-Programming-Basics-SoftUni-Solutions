function basketballEquipment(input) {
    let yearlyTax = Number(input[0]);
    let shoesPrice = (yearlyTax * 3/5);
    let equipePrice = (shoesPrice * 4/5);
    let ballPrice = (equipePrice * 1/4);
    let accesoriesPrice = (ballPrice * 1/5);

    let totalCost = yearlyTax + shoesPrice + equipePrice + ballPrice + accesoriesPrice
    console.log(totalCost);
}