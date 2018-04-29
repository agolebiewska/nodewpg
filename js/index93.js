let star = '*************';
// let number = 13;

for (let star = '*************', number = 13; number >= 0; number--) {
    star = star.substr(0 , number);
    console.log(star);
}