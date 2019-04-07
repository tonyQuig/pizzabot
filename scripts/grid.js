const grid = {
    x: '',
    y: ''
}

module.exports = {
    // Take the command line coordinates and remove the ','.
    parseGrid: arg => {
        grid.x = arg[0];
        grid.y = arg[2];
    },
    grid
}