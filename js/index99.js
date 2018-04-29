let sum = 0;
let result = 0;

for (let number = 0; number <= 1000; number++) {
    if (number % 2 == 0) {
        sum = sum + number;
        result++;
        if (result <= 20) {
            console.log(sum); 
        } else {
            break; }
    }
}