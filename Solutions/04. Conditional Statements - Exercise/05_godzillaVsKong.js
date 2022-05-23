function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let statistCount = Number(input[1]);
    let clothingPrice = Number(input[2]);

    let decor = 1/10 * budget;
    let clothingSum = statistCount * clothingPrice;
    if(statistCount > 150){
        clothingSum = clothingSum * 9/10
    }
    let filmCost = decor + clothingSum;
    let moneyLeft = budget - filmCost;

    if(filmCost > budget){
        console.log("Not enough money!");
        console.log(`Wingard needs ${(filmCost - budget).toFixed(2)} leva more.`);
    } else {
        console.log('Action!');
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }
}