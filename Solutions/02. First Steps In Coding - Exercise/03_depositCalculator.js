function calculateDeposits (input) {
    let deposit = Number(input[0]);
    let time = Number(input[1]);
    let interest = Number(input[2]) / 100;

    let accuredInterest = deposit * interest
    let interestPerMonth = accuredInterest / 12
    let totalSum = deposit + time * interestPerMonth
    console.log(totalSum)
}