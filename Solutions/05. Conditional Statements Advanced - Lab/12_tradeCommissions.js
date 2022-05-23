function tradeComissions(input) {
    let city = input[0];
    let sales = Number(input[1]);
    
    if(sales >= 0 && sales <= 500){
        if(city === "Sofia"){
            console.log((sales * 0.05).toFixed(2));
        } else if(city === "Varna"){
            console.log((sales * 4.5/100).toFixed(2));
        } else if(city === "Plovdiv"){
            console.log((sales * 5.5/100).toFixed(2));
        } else console.log("error");
    } else if(sales > 500 && sales <= 1000){
        if(city === "Sofia"){
            console.log((sales * 0.07).toFixed(2));
        } else if(city === "Varna"){
            console.log((sales * 7.5/100).toFixed(2));
        } else if(city === "Plovdiv"){
            console.log((sales * 8/100).toFixed(2));
        } else console.log("error");
    } else if(sales > 1000 && sales <= 10000){
        if(city === "Sofia"){
            console.log((sales * 0.08).toFixed(2));
        } else if(city === "Varna"){
            console.log((sales * 10/100).toFixed(2));
        } else if(city === "Plovdiv"){
            console.log((sales * 12/100).toFixed(2));
        } else console.log("error");
    } else if(sales > 10000){
        if(city === "Sofia"){
            console.log((sales * 0.12).toFixed(2));
        } else if(city === "Varna"){
            console.log((sales * 13/100).toFixed(2));
        } else if(city === "Plovdiv"){
            console.log((sales * 14.5/100).toFixed(2));
        } else console.log("error");
    } else console.log("error");
}