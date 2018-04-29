let star = '*************';
let number = 13;

do {
    star = star.substr(0 , number);
    console.log(star);
    number--
} while (number >= 0);