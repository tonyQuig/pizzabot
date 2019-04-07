const args = process.argv;
const routeModule = require('./scripts/route');
const coordinatesModule = require('./scripts/coordinates');
const gridModule = require('./scripts/grid');

// Get coordinates (as long as the grid is 5X5), which start at the 3rd command line argument.
gridModule.parseGrid(args[2]);
if (gridModule.grid.x = 5 && gridModule.grid.y == 5) {
    const coors = coordinatesModule.getCoordinates(args.slice(3));
    // Log out the journey.
    console.log(routeModule.getRoute(coors));
} else {
    console.log('Grid must be 5x5');

}