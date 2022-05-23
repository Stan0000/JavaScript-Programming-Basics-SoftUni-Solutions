function foodDelivery(input) {
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegetarianMenu = Number(input[2]);

    let totalCost = (chickenMenu * 10.35) + (fishMenu * 12.4) + (vegetarianMenu * 8.15);
    let dessertPrice = 1/5 * totalCost;
    let deliveryPrice = 2.5;

    let totalCostOfOrder = totalCost + dessertPrice + deliveryPrice;

    console.log(totalCostOfOrder);
}