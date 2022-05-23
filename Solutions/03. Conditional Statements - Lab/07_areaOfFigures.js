function areaOfFigures(input) {
    let figureType = input[0];
    let firstSide = Number(input[1]);
    let secondSide = Number(input[2]);
    let square = "square";
    let rectangle = 'rectangle';
    let circle = 'circle';
    let triangle = 'triangle'
    if (figureType == square) {
        console.log((firstSide * firstSide).toFixed(3));
    } else if (figureType == rectangle) {
        console.log((firstSide * secondSide).toFixed(3));
    } else if (figureType == circle) {
        console.log((Math.PI * firstSide * firstSide).toFixed(3));
    } else if (figureType == triangle) {
        console.log(((firstSide * secondSide) / 2).toFixed(3))
    }
}