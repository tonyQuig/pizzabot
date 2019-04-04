const args = process.argv;
const routeModule = require('./scripts/route');
const coordinates = require('./scripts/coordinates')

// Get coordinates, which start at the 3rd command line argument. Slice ;)
const coors = coordinates.getCoordinates(args.slice(3));
// Log out the journey.
console.log(routeModule.getRoute(coors));