var directions = function () {

    var directions = [];

    var moveWest = function () {
        return directions.push('W');
    }

    var moveSouth = function () {
        return directions.push('S');
    }

    var moveEast = function () {
        return directions.push('E');
    }

    var moveNorth = function () {
        return directions.push('N');
    }

    return {
        moveEast: moveEast,
        moveWest: moveWest,
        moveNorth: moveNorth,
        moveSouth: moveSouth,
        directions: directions
    };

}();

module.exports = directions;