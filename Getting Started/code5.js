
//<---------------------------Greatest of two numbers----------------------------->

/* 
Example
Input : num1 = 10, num2 = 20
Output : 20
*/


function greatestOfTwoNumbers(num1, num2){

    if(num1 > num2){
        console.log(num1 + " is greater than " + num2);
    }else if(num2 > num1){
        console.log(num2 + " is greater than " + num1);
    }else{
        console.log("Both numbers are equal.");
    }
}

greatestOfTwoNumbers(10, 20);