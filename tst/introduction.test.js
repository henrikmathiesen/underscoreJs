/// <reference path="../typings/tsd.d.ts" />

describe("Here we make some fun and interesting tests that comes to mind from the introduction module of the course", function () {
    
    it("should be an array, testing the underscore way (source code)", function () {
        var myArray = ['Adam', 'Bertil', 'Ceasar'];
        var isArray = myArray.length === +myArray.length;
        
        expect(isArray).toBe(true);
    });

    it("should not be an array, testing the underscore way (source code)", function () {
        var myObj = { name: "Henry" };
        var isArray = myObj.length === +myObj.length;
        
        expect(isArray).toBe(false);
    });

    it("should be an array, testing another way", function () {
        var myArray = ['Adam', 'Bertil', 'Ceasar'];
        var isArray = myArray.constructor === Array;

        expect(isArray).toBe(true);
    });

    it("should not be an array, testing another way", function () {
        var myObj = { name: "Henry" };
        var isArray = myObj.constructor === Array;

        expect(isArray).toBe(false);
    });

});