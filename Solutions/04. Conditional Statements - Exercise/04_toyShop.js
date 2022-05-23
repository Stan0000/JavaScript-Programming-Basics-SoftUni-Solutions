function toyShop(input) {
    let excursionPrice = Number(input[0]);
    let puzzles = Number(input[1]) * 2.6;
    let dolls = Number(input[2]) * 3;
    let bears = Number(input[3]) * 4.1;
    let minions = Number(input[4]) * 8.2;
    let trunks = Number(input[5]) * 2;

    let price = puzzles + dolls + bears + minions + trunks;
    let toyCount = Number(input[1]) + Number(input[2]) + Number(input[3]) + Number(input[4]) + Number(input[5]);
    let discount = 0;

    if(toyCount >= 50){
        discount = price * 1/4;
    }
     let finalSum = price - discount;
     let rent = 1/10 * finalSum;
     let profit = finalSum - rent;

     if(profit >= excursionPrice){
         console.log(`Yes! ${(profit - excursionPrice).toFixed(2)} lv left.`);
     } else if(profit < excursionPrice){
         console.log(`Not enough money! ${(-(profit - excursionPrice)).toFixed(2)} lv needed.`);
     }
}