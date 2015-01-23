/**
 * Created by koakx001 on 1/23/15.
 */

describe('testing GPA functions', function(){
    it('should return the correct GPA', function(){
        expect(calculateGPA("A", 4, "A", 4, "A", 4)).toEqual(4.0);
    });
//
//    it('returnKittens should return kittens', function(){
//        expect(returnKittens()).toBe("kittens");
//    });
//
//    //this test should now pass.
//    it('this test should fail!', function(){
//        expect(returnKittens()).not.toBe("Not Kittens!");
//    });
//
//    //this tests the isYelling function
//    it('isYelling should return true iff the argument string ends with an exclamation mark', function(){
//        expect(isYelling("Word!")).toBeTruthy();
//        expect(isYelling("Honey Badger")).toBeFalsy();
//    });

});