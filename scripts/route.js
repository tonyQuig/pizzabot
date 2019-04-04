var directionsModule = require('./directions');

const getRoute = function (coors) {

    coors.reduce((prev, current) => {
        getRouteBetweenCoordinates(prev, current);
        return current;
    }, [0, 0]);

    return directionsModule.directions.join('');

}

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
    getRoute: getRoute
}

