
//Just some example testing.
describe('testing basic functions', function(){
    it('should return the correct string length', function(){
        expect(testStringLength("kittens")).toEqual(7);
    });

    it('returnKittens should return kittens', function(){
        expect(returnKittens()).toBe("kittens");
    });

    //this test should now pass.
    it('this test should fail!', function(){
        expect(returnKittens()).not.toBe("Not Kittens!");
    });

    //this tests the isYelling function
    it('isYelling should return true iff the argument string ends with an exclamation mark', function(){
            expect(isYelling("Word!")).toBeTruthy();
            expect(isYelling("Honey Badger")).toBeFalsy();
    });

});

