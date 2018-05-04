const number = 0;

let fibanacci = function () {
    
    for (let index = 0, f, f1 = 1, f2 = 0; index <=9; index++ ) {
        f = f1 + f2;
        f1 = f2;
        f2 = f;
        console.log(f);
      }
}

for (let i = 0; i < 3; i++) {
    fibanacci();
}

