
//<------------------- Greatest of the Three numbers: ------------------->

/*
Example
Input : num1 = 10, num2 = 20, num3 = 15
Output : 20
*/

function greatestOfThreeNumbers(num1, num2, num3){  
    if(num1 > num2 && num1 > num3){
        console.log(num1 + " is greatest among " + num2 + " and " + num3);
    }else if(num2 > num1 && num2 > num3){
        console.log(num2 + " is greatest among " + num1 + " and " + num3);
    }else if(num3 > num1 && num3 > num2){
        console.log(num3 + " is greatest among " + num1 + " and " + num2);
    }else{
        console.log("All numbers are equal.");
    }
}

greatestOfThreeNumbers(10, 20, 15);