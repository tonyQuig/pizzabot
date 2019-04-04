const args = process.argv;
const routeModule = require('./scripts/route');
const coordinates = require('./scripts/coordinates')

// Slice ;)
const coors = coordinates.getCoordinates(args.slice(3));

console.log(routeModule.getRoute(coors));