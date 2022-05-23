function shopping(input) {
    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processors = Number(input[2]);
    let ramMemories =  Number(input[3]);

    let videoCardsSum = videoCards * 250;

    let processorsPrice = 35/100 * videoCardsSum;
    let processorsSum = processors * processorsPrice;

    let ramMemoriesPrice = videoCardsSum * 0.1;
    let ramMemoriesSum = ramMemories * ramMemoriesPrice;

    let totalSum = videoCardsSum + processorsSum + ramMemoriesSum;
    let totalPrice = totalSum;

    if(videoCards > processors){
        totalPrice = totalSum - (15/100 * totalSum);
    }
    if(budget >= totalPrice){
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`);
    }
}