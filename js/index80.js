let number = 0;
let sum = 0;

do {
    console.log (sum);
    number++;
    sum = sum += number;
}   while (number <=1000) (number %2 === 1);