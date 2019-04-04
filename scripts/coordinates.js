module.exports = {
    // Take the command line coordinates and remove the ','.
    getCoordinates: coordinates => coordinates.map(c => c.split(','))

}