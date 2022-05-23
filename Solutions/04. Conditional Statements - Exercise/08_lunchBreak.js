function lunchBreak(input) {
    let seriesName = input[0];
    let episodeLength = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime * 1/8;
    let restTime = breakTime * 1/4;
    let timeLeft = breakTime - restTime - lunchTime;

    if(timeLeft >= episodeLength){
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeLeft - episodeLength)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(episodeLength - timeLeft)} more minutes.`);
    }
}