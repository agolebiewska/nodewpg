
const playerName = 'Patrik Laine is lame ';
const teams = 'New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins';
const message = 'Winnipeg is the best Canadian citi, Go Winnipeg';

const name = playerName.slice (0, 15);
const team = teams.slice(46, 50);
const best = message.slice(12, 20);
const motto = message.slice(34, 38);

console.log(name);
console.log(team);
console.log(best);
console.log(motto);


const jests = ((team.charAt(0).toUpperCase()).concat (team.slice(1)) );
const patrik = (name.slice(0, 12).toUpperCase());

console.log(patrik, name.slice(13,16), best, jests + " player" + motto, jests+"!!");
