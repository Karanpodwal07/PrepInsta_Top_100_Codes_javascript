
//<-----------Check Whether a Number is Even or Odd------------>

/*
Example 
Input : num = 12
Output : Even 
*/


function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }
}

function checkEvenOdd2(num) {
    if(num & 1){
        console.log(num + " is Odd");
    }else{
        console.log(num + " is Even");
    }
}

// checkEvenOdd(12);
checkEvenOdd2(12);