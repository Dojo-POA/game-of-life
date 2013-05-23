var expect = require("chai").expect;
var sinon = require("sinon");
var evolve = require("../lib/gameoflife").evolve;
var countNeighbours = require("../lib/gameoflife").countNeighbours;
var shouldLive = require("../lib/gameoflife").shouldLive;


describe('Evolve', function() {

  it('should not evolve any cell when everything is dead', function(){
    var grid = [[0,0,0],
                [0,0,0],
                [0,0,0]];

    expect(grid).to.equals(evolve(grid));
  });

  it('should have 0 live neighbours for position (0, 0) ', function(){
    var grid = [[0,0,0],
                [0,0,0],
                [0,0,0]];
    expect(countNeighbours(grid, 0,0)).to.equals(0);

  });

  it('should have 1 live neighbours for position (1, 1) ', function(){
    var grid = [[0,1,0],
                [0,1,0],
                [0,0,0]];
    expect(countNeighbours(grid, 1,1)).to.equals(1);

  });

  it('should have 0 live neighbours for position (1, 1) ', function(){
    var grid = [[0,0,0],
                [0,1,0],
                [0,0,0]];
    expect(countNeighbours(grid, 1,1)).to.equals(0);

  });

  it('should know how to count 3 neiborsssssz', function(){
    var grid = [[1,1,0],
                [0,1,0],
                [0,0,1]];
    expect(countNeighbours(grid, 1,1)).to.equals(3);    
  });

 it('should know how to count 3 neiborsssssz', function(){
    var grid = [[1,1,1],
                [1,1,1],
                [1,1,1]];
    expect(countNeighbours(grid, 1,1)).to.equals(8);    
  });

 it('should die for less than 2 alive neighbours cells', function(){
  expect(shouldLive(1)).to.equals(false);    
 })

 it('should die for more than 3 alive neighbours cells', function(){
  expect(shouldLive(4)).to.equals(false); 
  expect(shouldLive(5)).to.equals(false);    
 })

 it('should live for more than 2 or 3 alive neighbours cells', function(){
  expect(shouldLive(3)).to.equals(true); 
  expect(shouldLive(2)).to.equals(true);    
 })

 it('should live when you are dead for 3 cells', function(){
  expect(shouldLive(3)).to.equals(true); 
 })


  xit('should kill cells with less than 2 neiborsssssz', function(){
    var intialGrid = [[1,0,0],
                      [0,0,0],
                      [0,0,0]];
    
    var expectedGrid = [[0,0,0],
                        [0,0,0],
                        [0,0,0]];

    expect(evolve(intialGrid)).to.equals(expectedGrid);    
  });
});
