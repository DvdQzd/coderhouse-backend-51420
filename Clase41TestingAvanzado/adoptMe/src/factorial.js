const memo = {};

export const factorial = (n) => {
    if(n <= 1) return 1;
    if(memo[n]) return memo[n];
    const result = n * factorial(n - 1);
    memo[n] = result;
    return result;
}
