var expect = require('chai').expect;
var directionsModule = require('../scripts/directions');

describe('Directions', function(){
    it('moveWest() should append element to array', function(){
        var west = directionsModule.moveWest();
        expect(west).to.be.equal(1);
    });

    it('moveSouth() should append another element to array', function(){
        var south = directionsModule.moveSouth();
        expect(south).to.be.equal(2);
    });

    it('moveEast() should append another element to array', function(){
        var east = directionsModule.moveEast();
        expect(east).to.be.equal(3);
    });

    it('moveNorth() should append another element to array', function(){
        var north = directionsModule.moveNorth();
        expect(north).to.be.equal(4);
    });
});