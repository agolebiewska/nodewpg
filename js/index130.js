
const mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Beast', 'Phoenix'];
console.log(`Orginal mutants list: ${mutants}`);

const sortedMutants = mutants.sort();
console.log(`Sorted mutants list: ${sortedMutants}`);

const reversedMutants = sortedMutants.reverse();
console.log(`Reversed mutants list: ${reversedMutants}`);

const joinMutants = mutants.join(' * ');
console.log(`Mutants name separated by *: ${joinMutants}`);
