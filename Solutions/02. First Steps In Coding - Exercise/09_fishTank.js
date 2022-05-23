function aquarium(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]);

    let volumeOfAquarium = length * width * height;
    let volumeInLiters = volumeOfAquarium / 1000;
    let occupiedSpace = percentage / 100;
    let neededLiters = volumeInLiters * (1 - occupiedSpace);

    console.log(neededLiters);
}