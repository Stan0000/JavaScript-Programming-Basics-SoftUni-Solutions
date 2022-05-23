function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let timeNeeded = Number(input[3]);
    let bagsSum = 0.4;

    let materialsSum = ((nylon + 2) * 1.5) + ((paint + paint * 0.1) * 14.5) + thinner * 5 + bagsSum;
    let buildersSum = (materialsSum * (30 / 100)) * timeNeeded;
    let finalSum = materialsSum + buildersSum;

    console.log(finalSum);
}