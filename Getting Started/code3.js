
//<------------------- Find the Sum of N Natural Numbers ------------------->

/* 
Example
Input : num = 8
Output : 36

Where first 8 number is 1, 2, 3, 4, 5, 6, 7, 8
Sum of numbers = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36
*/


function sumOfNaturalNumbers(num){
    let sum  = 0;
    for(let i=1;i<=num;i++){
        sum += i;
    }
    return sum;
}

let ans = sumOfNaturalNumbers(10);
console.log(ans);