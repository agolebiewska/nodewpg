function getShapePerimiter(base, height){
    let perimeter;
    if (base === height) {
        perimeter = base * height;
    } else {
        perimeter = (2 * base) + (2 * height); 
    }
    return perimeter;
}

let perimeter = getShapePerimiter(10, 20);
if (perimeter > 100) {
    console.log(`The perimiter is to big`);
} else {
    console.log(`The perimiter is fine. ${perimeter} is the shape perimiter`);
}

