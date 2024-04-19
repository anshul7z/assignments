/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let sum=0;
    const currentDate1=new Date();
    let start=currentDate1.getTime();
    //console.log(start);
    for(let i=0;i<n;i++){
        sum+=i;
    }
    const currentDate2=new Date();
    let end=currentDate2.getTime();
    //console.log(end);
    console.log("total time in seconds "+(end-start)/1000);
}

calculateTime(10000000000);