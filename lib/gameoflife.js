function evolve(grid) {
	return grid;
}

function countNeighbours(grid, columnIndex, rowIndex){
	var n1 = getCellValue(grid, rowIndex - 1, columnIndex -1);
	var n2 = getCellValue(grid, rowIndex - 1, columnIndex);
	var n3 = getCellValue(grid, rowIndex - 1, columnIndex + 1);
	var n4 = getCellValue(grid, rowIndex, columnIndex - 1);
	var n5 = getCellValue(grid, rowIndex, columnIndex + 1);
	var n6 = getCellValue(grid, rowIndex + 1, columnIndex - 1);
	var n7 = getCellValue(grid, rowIndex + 1, columnIndex);
	var n8 = getCellValue(grid, rowIndex + 1, columnIndex + 1);

	return n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8;
}

function getCellValue(grid, rowIndex, columnIndex){
	return +!!(grid[rowIndex] || [])[columnIndex];
}

function shouldLive(numberOfNeighbours){

    
     
    return numberOfNeighbours == 3  || numberOfNeighbours == 2;

}

exports.evolve = evolve;
exports.countNeighbours = countNeighbours;
exports.shouldLive = shouldLive;