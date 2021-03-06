/// <reference path="../../typings/tsd.d.ts" />

/*

http://underscorejs.org/#zip
zip_.zip(*arrays)
Merges together the values of each of the arrays with the values at the corresponding position. Useful when you have separate data sources that are coordinated through matching array indexes. Use with apply to pass in an array of arrays. If you're working with a matrix of nested arrays, this can be used to transpose the matrix. 

*/

describe("03-arrays-zip", function () {

    it("should merge arrays", function () {

        var arrayOne = ["Adam", "Bertil", "Ceasar"];
        var arrayTwo = [1, 2, 3];

        var mergedArraysOneTwo = _.zip(arrayOne, arrayTwo);

        expect(mergedArraysOneTwo).toEqual([ ["Adam", 1], ["Bertil", 2], ["Ceasar", 3] ]);

    });

});