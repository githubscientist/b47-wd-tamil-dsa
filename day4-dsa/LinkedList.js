// time complexity: O(n)
let numbers = [1, 2, 3, 4, 5];

for (let i = numbers.length; i > 0; i--){
    numbers[i] = numbers[i - 1];
}

numbers[0] = 10;

console.log(numbers);

// [10, 1, 2, 3, 4, 5]
/*
    [1, 1, 2, 3, 4, 5]    
    [0][1][2][3][4][5]

    numbers[5] = numbers[4]
    numbers[4] = numbers[3]
    numbers[3] = numbers[2]
    numbers[2] = numbers[1]
    numbers[1] = numbers[0]

    numbers[0] = 10;
*/