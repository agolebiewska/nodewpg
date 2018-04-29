let result = 0;
for (let number = 0; number <=1000; number++) {
    result = result + number;
    if (result <= 400) {
        console.log (result);
    } else {
        break;
    }
}