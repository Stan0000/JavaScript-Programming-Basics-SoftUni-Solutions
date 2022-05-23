function timePlus15Minutes(input) {
    let bonusTime = 15;
    let minutes = Number(input[1]);
    let minutesPlusBonusTime = minutes + bonusTime;
    let hours = Math.floor(minutesPlusBonusTime / 60) + Number(input[0]);
    if(hours >= 24){
        hours = hours % 24;
    }
    if(minutesPlusBonusTime >= 60){
        minutes = minutesPlusBonusTime % 60;
    } else{
        minutes = minutes + bonusTime;
    }
     if(minutes < 10){
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }
}