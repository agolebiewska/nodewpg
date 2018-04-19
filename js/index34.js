const income = 1000;
const revenue = 600;
const taxes = 500;

const goalIncome = 800;
const goalTaxes = 400;
const goalRevenue = 600;

console.log(`This months objectives are:`);
console.log(`Income at least ${goalIncome} or more. ` +(income >= goalIncome));
console.log(`Expend less than ${goalTaxes} on taxes.`); 
console.log(`We pay bonus if our revenue is ${goalRevenue}.`);


console.log(`Income: `+ (income >= goalIncome)); 
console.log(`Taxes: ` + (taxes < goalTaxes));
console.log(`Revenu: `+ (revenue == goalRevenue));
