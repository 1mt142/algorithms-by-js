/*
 We evaluate the performanc of an algorithm in terms of its input size.

*Time Complexity - Amount of time taken by an algorithm to run,as a function of input size.
*Space Complexity - Amount of memory taken by an algorithm to run ,as a function of input size.


How to represent complexity ?
-Mathematical tools to represent time and space complexity
1. Big-O Notation -Worst case complexity
2. Omega Notation - Best case complexity
3. Theta Notation - Average case complexity


#Big-O Notation:
i) It is expressed in terms of the input 
ii) It focused on the bigger picture without getting caught up in the minute details

 */
// Example 

function summation(n) {
    let sum=0;                          // stm = 1
    
    for (let i = 0; i <= n; i++) {
        sum+=i;                         // stm= n
    }
    return sum;                         // stm = 1
}

//calling function
console.log(summation(100));

// stm = n+2
// if n=1000000000+2 (here 2 is not much important so we can cnsd O(n)

function sumz(n) {
    return (n*(n+1))/2;  stm=1
}

console.log(sumz(100));
// O(1)

// if two nested loop then O(n^2) - Quadratic // if three nested  O(n^3) - Cubic



/*

Space Complexity
O(1) - Constant
O(n) - Linear
O(logn)- Logarithmic


*/