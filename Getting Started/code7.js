
//<---------------------Program to Check Whether a Year is a Leap Year or Not---------->
/*
Example
Input : 2020
Output : 2020 is a Leap Year

*/


function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a Leap Year");
    } else {
        console.log(year + " is not a Leap Year");
    }
}

checkLeapYear(2020);
checkLeapYear(1900);

//math.floor(4.7) => 4
//math.abs(-5) => 5