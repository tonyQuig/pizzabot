const directionsModule = require('./directions');

/**
 * Takes array of coordinates, gets the route between the previous and current coordinates
 * Returns the finished journey.
 * @param {Array} coors 
 */
const getRoute = function (coors) {

    console.log('Coors: ', coors);

    coors.reduce((prev, current) => {
        console.log('Previous: ', prev, 'current: ', current)
        getRouteBetweenCoordinates(prev, current);
        return current;
    }, [0,0]);

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

    while (xCurrent < coordinate2[0]) {
        directionsModule.moveEast();
        xCurrent++;
    }

    while (xCurrent > coordinate2[0]) {
        directionsModule.moveWest();
        xCurrent--;
    }

    while (yCurrent < coordinate2[1]) {
        directionsModule.moveNorth();
        yCurrent++;
    }

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

