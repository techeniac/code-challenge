// Here are three unique implementations of the sum_to_n function in TypeScript, each with different approaches and efficiency:

// 1. Iterative Approach
function sum_to_n_a(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// ## Explanation:
// # This method simply loops through all the numbers from 1 to n and keeps adding them up. It's like counting on your fingers.
// # Efficiency: It’s pretty straightforward, but if n is big, it might take a bit of time.


// 2. Mathematical Formula (Gauss' Formula)
function sum_to_n_b(n: number): number {
    return (n * (n + 1)) / 2;
}

// ## Explanation:
// # This one uses a neat trick from math. Instead of adding all the numbers one by one, it uses a formula that gives you the sum in one quick calculation.
// # Efficiency: Super fast, no matter how big n is.


// 3. Recursive Approach
function sum_to_n_c(n: number): number {
    if (n === 1) {
        return 1;
    }
    return n + sum_to_n_c(n - 1);
}

// ## Explanation:
// # This method uses a technique called recursion. It keeps calling itself with smaller and smaller numbers until it adds everything up. Think of it as breaking the problem into smaller pieces.
// # Efficiency: Works fine for small numbers, but if n is really big, it could run into trouble because it uses more memory.



// ## Summary:
// # First method is like counting step by step.
// # Second method is a clever shortcut using math.
// # Third method is breaking it down into smaller tasks, but it’s a bit more memory-hungry.
// # The second method is usually the best choice because it’s the fastest and uses the least memory.