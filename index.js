function prevDay(date, day){
    if( day < 0 || day > 7 ||
        typeof date !== 'object' || !(date instanceof Date)) {
        return undefined;
    }
    
    var daySince = date.getDay() - (day % 7);

    if(daySince <= 0){
        daySince += 7;
    }
    return {
        date: new Date(date.getFullYear(), date.getMonth(), date.getDate() - daySince),
        daySince: daySince
    };
}

prevDay.Monday = 1;
prevDay.Tueday = 2;
prevDay.Wednesday = 3;
prevDay.Thursday = 4;
prevDay.Friday = 5;
prevDay.Saturday = 6;
prevDay.Sunday = 7;

exports = module.exports = prevDay;
