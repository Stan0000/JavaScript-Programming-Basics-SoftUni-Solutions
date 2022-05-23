function fruitShop(input) {
    let fruit = input[0];
    let dayOfTheWeek = input[1];
    let quantity = Number(input[2]);

    if(fruit === "banana"){
        if(dayOfTheWeek === "Saturday" || dayOfTheWeek === "Sunday"){
            console.log((2.7 * quantity).toFixed(2));
        } else if(dayOfTheWeek === "Monday" || dayOfTheWeek === "Tuesday" || dayOfTheWeek === "Wednesday" || dayOfTheWeek === "Thursday" || dayOfTheWeek === "Friday") {console.log((2.5 * quantity).toFixed(2));}else console.log("error");
    } else if(fruit === "apple"){
        if(dayOfTheWeek === "Saturday" || dayOfTheWeek === "Sunday"){
            console.log((1.25 * quantity).toFixed(2));
        } else if(dayOfTheWeek === "Monday" || dayOfTheWeek === "Tuesday" || dayOfTheWeek === "Wednesday" || dayOfTheWeek === "Thursday" || dayOfTheWeek === "Friday") {console.log((1.2 * quantity).toFixed(2));}else console.log("error");
    } else if(fruit === "orange"){
        if(dayOfTheWeek === "Saturday" || dayOfTheWeek === "Sunday"){
            console.log((0.9 * quantity).toFixed(2));
        } else if(dayOfTheWeek === "Monday" || dayOfTheWeek === "Tuesday" || dayOfTheWeek === "Wednesday" || dayOfTheWeek === "Thursday" || dayOfTheWeek === "Friday") {console.log((0.85 * quantity).toFixed(2));}else console.log("error");
    } else if(fruit === "grapefruit"){
        if(dayOfTheWeek === "Saturday" || dayOfTheWeek === "Sunday"){
            console.log((1.6 * quantity).toFixed(2));
        } else if(dayOfTheWeek === "Monday" || dayOfTheWeek === "Tuesday" || dayOfTheWeek === "Wednesday" || dayOfTheWeek === "Thursday" || dayOfTheWeek === "Friday") {console.log((1.45 * quantity).toFixed(2));}else console.log("error");
    } else if(fruit === "kiwi"){
        if(dayOfTheWeek === "Saturday" || dayOfTheWeek === "Sunday"){
            console.log((3 * quantity).toFixed(2));
        } else if(dayOfTheWeek === "Monday" || dayOfTheWeek === "Tuesday" || dayOfTheWeek === "Wednesday" || dayOfTheWeek === "Thursday" || dayOfTheWeek === "Friday") {console.log((2.7 * quantity).toFixed(2));}else console.log("error");
    } else if(fruit === "pineapple"){
        if(dayOfTheWeek === "Saturday" || dayOfTheWeek === "Sunday"){
            console.log((5.6 * quantity).toFixed(2));
        } else if(dayOfTheWeek === "Monday" || dayOfTheWeek === "Tuesday" || dayOfTheWeek === "Wednesday" || dayOfTheWeek === "Thursday" || dayOfTheWeek === "Friday") {console.log((5.5 * quantity).toFixed(2));}else console.log("error");
    } else if(fruit === "grapes"){
        if(dayOfTheWeek === "Saturday" || dayOfTheWeek === "Sunday"){
            console.log((4.2 * quantity).toFixed(2));
        } else if(dayOfTheWeek === "Monday" || dayOfTheWeek === "Tuesday" || dayOfTheWeek === "Wednesday" || dayOfTheWeek === "Thursday" || dayOfTheWeek === "Friday") {console.log((3.85 * quantity).toFixed(2));}else console.log("error");
    } else console.log("error");
}