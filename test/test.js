var expect = require('chai').expect;
var directionsModule = require('../scripts/directions');
var routeModule = require('../scripts/route');
var coordinateModule = require('../scripts/coordinates');

describe('Directions Module', function () {
    it('moveWest() should append element to array', function () {
        directionsModule.moveWest();
        expect(directionsModule.directions[0]).to.be.equal('W');
    });

    it('moveSouth() should append another element to array', function () {
        directionsModule.moveSouth();
        expect(directionsModule.directions[1]).to.be.equal('S');
    });

    it('moveEast() should append another element to array', function () {
        directionsModule.moveEast();
        expect(directionsModule.directions[2]).to.be.equal('E');
    });

    it('moveNorth() should append another element to array', function () {
        directionsModule.moveNorth();
        expect(directionsModule.directions[3]).to.be.equal('N');
    });

    it('directions array should list all directions taken', function () {
        expect(directionsModule.directions.join('')).to.be.equal('WSEN');
    })
});

describe('Routes Module', function () {
    it('should get correct route between two coordinates', function () {
        // directionsModule.directions = [];
        routeModule.getRoute([
            ['1', '2'],
            ['2', '3']
        ])
        expect(directionsModule.directions.join('')).to.be.equal('WSENENNDEND')
    });
});

describe('Coordinates Module', function (){
    it('should remove the  from the coordinate', function(){
        expect(coordinateModule.getCoordinates([ '1,2', '2,3' ])).to.eql([['1','2'], ['2','3']]);
    });
})