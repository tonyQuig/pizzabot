const directionsModule = require('./directions');

/**
 * Takes array of coordinates, gets the route between the previous and current coordinates
 * Returns the finished journey.
 * @param {Array} coors 
 */
const getRoute = function (coors) {

    coors.reduce((prev, current) => {
        getRouteBetweenCoordinates(prev, current);
        return current;
    }, [0, 0]);

    return directionsModule.directions.join('');

};

/**
 * Takes two sets of coordinates and works out which direction to take on the grid. 
 * @param {Array} coordinate1 
 * @param {Array} coordinate2 
 */
const getRouteBetweenCoordinates = (coordinate1, coordinate2) => {

    let xCurrent = coordinate1[0];
    let yCurrent = coordinate1[1];

    // While x coordinate of last position is less than x coordinate of next destination move east
    while (xCurrent < coordinate2[0]) {
        directionsModule.moveEast();
        xCurrent++;
    }

    // While x coordinate of last position is greater than x coordinate of next destination move west
    while (xCurrent > coordinate2[0]) {
        directionsModule.moveWest();
        xCurrent--;
    }

    // While y coordinate of last position is less than y coordinate of next destination move north
    while (yCurrent < coordinate2[1]) {
        directionsModule.moveNorth();
        yCurrent++;
    }

    // While y coordinate of last position is greater than y coordinate of next destination move south
    while (yCurrent > coordinate2[1]) {
        directionsModule.moveSouth();
        yCurrent--;
    }

    directionsModule.directions.push('D');
}

module.exports = {
    getRoute: getRoute,
    getRouteBetweenCoordinates: getRouteBetweenCoordinates
}