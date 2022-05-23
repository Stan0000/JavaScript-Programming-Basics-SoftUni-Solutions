function excellentResult(input) {
    let score = Number(input[0]);
    if (score >= 5.50 && score <= 6){
        console.log("Excellent!");
    }
     else if(score < 5.50){
        console.log(`Not a good result! :(`);
    } else if(score > 6){
        console.log(`That score does not exist!`);
    }
}