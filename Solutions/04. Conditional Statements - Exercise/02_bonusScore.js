function bonusScore(input) {
    let points = Number(input);
    let bonusPoints = 0;

    if(points <= 100) {
        bonusPoints = 5;
    } else if( points > 100 && points <= 1000) {
        bonusPoints = 1/5 * points;
    } else if (points > 1000) {
        bonusPoints = 1/10 * points;
    }
    if (points % 2 === 0) {
        bonusPoints++;
    } else if (points % 10 === 5) {
        bonusPoints = bonusPoints + 2;
    }
    console.log(bonusPoints);
    console.log(points + bonusPoints);
}