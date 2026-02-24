
//<----------------------- Find the Sum of Numbers in a given range ------------------->
/*
Example
Input : 2 5
Output : 2 + 3 + 4 + 5 + 6 = 20
*/


function sumOfNumbersInRange(start, end){

    let sum = 0;
    for(let i = start; i <= end; i++){
        sum += i;
    }
    return sum;
}

let ans = sumOfNumbersInRange(2, 5);
console.log(ans);