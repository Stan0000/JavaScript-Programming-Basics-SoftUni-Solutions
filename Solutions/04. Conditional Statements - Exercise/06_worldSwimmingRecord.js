function worldSwimmingRecord(input) {
    let recordInSecs = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeFor1Meter = Number(input[2]);
    let time1500M = distanceInMeters * timeFor1Meter;
    let bonusSecs = Math.floor(distanceInMeters / 15) * 12.5;
    let totalTime = time1500M + bonusSecs;
    if(recordInSecs <= totalTime){
        console.log(`No, he failed! He was ${(totalTime - recordInSecs).toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
}