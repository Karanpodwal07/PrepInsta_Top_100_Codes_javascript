
//<------------------ Program to Check Whether the Number is Prime or Not----------------->
/*
Example 
Input : 5
Output : 5 is a Prime Number
*/

function checkPrime(num) {
    if (num <= 1) {
        console.log(num + " is not a Prime Number");
        return;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log(num + " is not a Prime Number");
            return;
        }
    }
    console.log(num + " is a Prime Number");
}

checkPrime(2);
checkPrime(10);