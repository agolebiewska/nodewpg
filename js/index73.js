let star = '*************';
let number = 13;

while (number >= 0) {
    star = star.substr(0 , number);
    console.log(star);
    number--
}
