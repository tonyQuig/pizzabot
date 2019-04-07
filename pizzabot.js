const args = process.argv;
const routeModule = require('./scripts/route');
const coordinatesModule = require('./scripts/coordinates');
const directionsModule = require('./scripts/directions');

// Get coordinates, which start at the 3rd command line argument. Slice ;)
const coors = coordinatesModule.getCoordinates(args.slice(3));
// console.log('Coordinates: ', coors)
// Log out the journey.
console.log(routeModule.getRoute(coors));