const { differenceInYears, differenceInCalendarYears, isDate } = require('date-fns')

var result = differenceInCalendarYears(new Date(2019, 1, 11), new Date(2050, 11, 31))
console.log(isDate(null))
