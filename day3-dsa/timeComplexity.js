// Performance of an algorithm
/*
    1. time complexity
    2. space complexity

    mathematical notation: asymptotic notations

    Asymptotic Notations:

    1. Big - 'O' notation - Upper Bound
    2. Big - 'Theta' notation - Tight Bound
    3. Big - 'Omega' notation - Lower Bound

    Situtations/Cases:

    1. Worst Case - Big 'O' notation
    2. Average Case
    3. Best Case

    Algorithm time complexity:

        Worst Case - Big 'O' notation

*/

let a = 0, b = 0;
for (let i = 0; i < N; i++) {
    a = a + rand();
}
for (let j = 0; j < M; j++) {
    b = b + rand();
}

/*
    What is the time complexity of the above code ?

    let a = 0, b = 0; 

    // Order of 1
    Constant time - O(1)


    let a = 0, b = 0; // O(1)

    for (let i = 0; i < N; i++) {
        a = a + rand();
    }

    => i = 0, 1, 2, 3, ... N-1
    => N = 5, i = 0, 1, 2, 3, 4
    => N = 7, i = 0, 1, 2, 3, 4, 5, 6
    => N = 3, i = 0, 1, 2

    => total executions: N

    for (let j = 0; j < M; j++) {
        b = b + rand();
    }

    => j = 0, 1, 2, 3, .... M-1
    => total executions: M

    Total Complexity, T(N, M) = 1 +  N + M
                              = N + M
                              = O(N+M)

    loop within a loop
    outside loop -> N
    inside loop -> N-1
    // N * (N-1)
    // = N^2 - N
    // = O(N^2)
*/

/*
    time complexities:

    O(1)
    O(logN)
    O(N)
    O(NlogN)
    O(N^2)
    O(N^2 logN)
    O(N^3)
    O(N^3 logN)
    O(2^N)
    O(N!)

    let a = 0;
    for (i = 0; i < N; i++) {
        for (j = N; j > i; j--) {
            a = a + i + j;
        }
    }

    Assume, N = 5

    i = 0; j = 5, 4, 3, 2, 1 = 5
    i = 1; j = 5, 4, 3, 2 = 4
    i = 2; j = 5, 4, 3 = 3
    i = 3; j = 5, 4 = 2
    i = 4; j = 5 = 1

    For N = 5, total executions = 5 + 4 + 3 + 2 + 1 = 15
    For N = 4, total executions = 4 + 3 + 2 + 1 = 10

    Generalize:

    For N, Total Executions = Sum of first N natural numbers
                            = [N*(N+1)]/2


    N = 4, S(N) = [N*(N+1)]/2
                = [4*(5)]/2
                = 20/2
                = 10


    T(N) = 1 + [N*(N+1)]/2
         = 1/2 * (N*(N+1))
         = N*(N+1)
         = N^2 + N
         = N^2


    Time Complexity = O(N^2)

*/

/*
    O(1)
    O(logN)
    O(N)
    O(NlogN)
    O(N^2)
    O(N^2 logN)
    O(N^3)
    O(N^3 logN)
    O(2^N)
    O(N!)

    int i, j, k = 0;
    for (i = n / 2; i <= n; i++) { 
        for (j = 2; j <= n; j = j * 2) {
            k = k + n / 2;
        }
    }

    i = n/2, n/2 + 1, n/2 + 2, .... n

    n = 5, n/2 = 2.5, 2, 2, 3
    n/2 = 2
    i = 2, 3, 4, 5 = 4

    n = 6, i = 3, 4, 5, 6 = 4

    O(N/2) or O(N/2 + 1)

    n = 5, j = 2, 4 = 2 executions
    n = 6, j = 2, 4 = 2 executions
    n = 10, j = 2, 4, 8 = 3 executions
    n = 20, j = 2, 4, 8, 16 = 4 executions

    2, 4, 8, 16, 32, 64, 128, 256, ..... N => log N

    2^x = N, solve for x

    Solution:

    2^x = N
    apply log2 (log to the base-2):

    log2(2^x) = log2(N)

    x log2(2) = log2(N) [since, log(a^x) = x log(a)]
    x(1) = log2(N) [since, loga(a) = 1]
    x = log2(N)

    T(N) = 1 + N/2 * log2(N)
         = 1/2*N*log2(N)
         = N log2(N)

         O(N log2(N))

*/

/*
    Given an array of size N, to find the combinations of the array

    Example:

    [1, 2, 3]

    Combinations: (Selections)

    0: ()
    1: (1), (2), (3)
    2: (1, 2), (2, 3), (1, 3)
    3: (1, 2, 3)

    for n items, total number of ways of selection: 2^n

    3 items: 8
    4 items: 16
    2 items: 4
    5 items: 32
*/