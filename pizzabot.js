var coors = [];
var coorList = [];
var grid = [];
var args = process.argv;
var coordinateArgs = 3;
var coorsAfterFirst = 1;
var lastPosition = [];
var startingPosition = [x = 0, y = 0];
// var directions = [];
var directionsModule = require('./directions');

//handles command line args.
var handleArgs = function (args) {

    // var grid = getGrid(args[2]);

    var coors = getCoordinates(args);

    //Get route for first trip
    getRoute(startingPosition, coors[0]);

    //Get route for all other trips
    while (coorsAfterFirst < coors.length) {
        getRoute(lastPosition, coors[coorsAfterFirst]);
        coorsAfterFirst++;
    }

    console.log('Journey: ', directionsModule.directions.join(''));
};

var getGrid = function (pGrid) {

    //TODO: Handle case when grid input isn't of the format '5x5'

    var gridArray = pGrid.split('x');

    //Take command line grid and pipulate grid array.
    grid.x = gridArray[0];
    grid.y = gridArray[1];

    return grid;

};

var getCoordinates = function (pCoors) {

    while (coordinateArgs < pCoors.length) {

        var coorArray = pCoors[coordinateArgs].split(',');
        coors.x = parseInt(coorArray[0]);
        coors.y = parseInt(coorArray[1]);

        coorList.push([coors.x, coors.y]);

        coordinateArgs++;
    }

    return coorList;
}

var getRoute = function (position1, position2) {

    xDifference = position2[0] - position1[0];
    yDifference = position2[1] - position1[1];

    var xCurrent = position1[0];
    var yCurrent = position1[1];

    while (xCurrent < position2[0]) {
        directionsModule.moveEast();
        xCurrent++;
    }

    while (xCurrent > position2[0]) {
        directionsModule.moveWest();
        xCurrent--;
    }

    while (yCurrent < position2[1]) {
        directionsModule.moveNorth();
        yCurrent++;
    }

    while (yCurrent > position2[1]) {
        directionsModule.moveSouth();
        yCurrent--;
    }

    lastPosition = [];
    lastPosition.push(x = xCurrent, y = yCurrent);

    directionsModule.directions.push('D');

}

//Get command line args
handleArgs(args);