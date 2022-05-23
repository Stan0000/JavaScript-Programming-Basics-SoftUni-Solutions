function yardGreening(input) {
    let pricePerSquareMeter = 7.61 * Number(input[0]);
    let discount = pricePerSquareMeter * 0.18;
    let finalPrice = pricePerSquareMeter - discount;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}