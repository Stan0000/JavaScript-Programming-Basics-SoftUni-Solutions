function smallShop(input) {
    let food = input[0];
    let city = input[1];
    let quantity = Number(input[2]);

if(city == 'Varna'){
    if(food == 'coffee'){
        console.log(0.45 * quantity);
    } else if(food == 'water'){
        console.log(0.7 * quantity);
    } else if(food == 'beer'){
        console.log(1.10 * quantity);
    } else if(food == 'sweets'){
        console.log(1.35 * quantity);
    } else if(food == 'peanuts'){
        console.log(1.55 * quantity);
        }
    } else if(city == 'Plovdiv'){
        if(food == 'coffee'){
            console.log(0.4 * quantity);
        } else if(food == 'water'){
            console.log(0.7 * quantity);
        } else if(food == 'beer'){
            console.log(1.15 * quantity);
        } else if(food == 'sweets'){
            console.log(1.3 * quantity);
        } else if(food == 'peanuts'){
            console.log(1.5 * quantity);
            }
    } else if(city == 'Sofia'){
        if(food == 'coffee'){
            console.log(0.5 * quantity);
        } else if(food == 'water'){
            console.log(0.8 * quantity);
        } else if(food == 'beer'){
            console.log(1.2 * quantity);
        } else if(food == 'sweets'){
            console.log(1.45 * quantity);
        } else if(food == 'peanuts'){
            console.log(1.6 * quantity);
            }
    }
}