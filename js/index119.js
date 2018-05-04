

const data = [42, true, function() {return 'The meaning of life is: '}];

if (data[1] == true) {
    console.log(`${data[2]()} ${data[0]}`);
}


// If the second item from data is true then show the following output using the first and last items from the data array:
// The meaning of life is: 42