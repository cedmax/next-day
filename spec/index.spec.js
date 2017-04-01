describe("Works fine", function() {

    var prevDay = require('../index.js');

    //April 21, 2016, Thursday
    var today = new Date(2016, 3, 21);
    it("Monday", function() {
        var prevMonday = prevDay(today, 1);
        expect(prevMonday.date).toBeDefined();
        expect(prevMonday.date).toEqual(new Date(2016,3,18));
        expect(prevMonday.daySince).toBeDefined();
        expect(prevMonday.daySince).toEqual(3);
    });
    it("Tueday", function(){
        var prevTueday = prevDay(today, 2);
        expect(prevTueday.date).toBeDefined();
        expect(prevTueday.date).toEqual(new Date(2016,3,19));
        expect(prevTueday.daySince).toBeDefined();
        expect(prevTueday.daySince).toEqual(2);
    });
    it("Wednesday", function(){
        var prevWednesday = prevDay(today, 3);
        expect(prevWednesday.date).toBeDefined();
        expect(prevWednesday.date).toEqual(new Date(2016,3,20));
        expect(prevWednesday.daySince).toBeDefined();
        expect(prevWednesday.daySince).toEqual(1);
    });
    it("Thursday", function(){
        var prevThursday = prevDay(today, 4);
        expect(prevThursday.date).toBeDefined();
        expect(prevThursday.date).toEqual(new Date(2016,3,14));
        expect(prevThursday.daySince).toBeDefined();
        expect(prevThursday.daySince).toEqual(7);
    });
    it("Friday", function(){
        var prevFriday = prevDay(today, 5);
        expect(prevFriday.date).toBeDefined();
        expect(prevFriday.date).toEqual(new Date(2016,3,15));
        expect(prevFriday.daySince).toBeDefined();
        expect(prevFriday.daySince).toEqual(6);
    });
    it("Saturday", function(){
        var prevSaturday = prevDay(today, 6);
        expect(prevSaturday.date).toBeDefined();
        expect(prevSaturday.date).toEqual(new Date(2016,3,16));
        expect(prevSaturday.daySince).toBeDefined();
        expect(prevSaturday.daySince).toEqual(5);
    });
    it("Sunday", function(){
        var prevSunday = prevDay(today, 7);
        expect(prevSunday.date).toBeDefined();
        expect(prevSunday.date).toEqual(new Date(2016,3,17));
        expect(prevSunday.daySince).toBeDefined();
        expect(prevSunday.daySince).toEqual(4);
        expect(prevSunday).toEqual(prevDay(today, 0));
    });

    it("Constant", function(){
        expect(prevDay.Monday).toEqual(1);
        expect(prevDay.Tueday).toEqual(2);
        expect(prevDay.Wednesday).toEqual(3);
        expect(prevDay.Thursday).toEqual(4);
        expect(prevDay.Friday).toEqual(5);
        expect(prevDay.Saturday).toEqual(6);
        expect(prevDay.Sunday).toEqual(7);
    });

    it("undefined", function(){
        expect(prevDay(today, -1)).toBeUndefined();
        expect(prevDay(today, 8)).toBeUndefined();
    });
});
