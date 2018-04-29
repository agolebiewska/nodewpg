let weekDayNumber = 2;
let message = null
// No1 using Swich 
// switch (weekDayNumber) {
//     case 1 : 
//         console.log('Today it\'s Monday'); 
//     break;
//     case 2 :
//         console.log('Today it\'s Tuesday');
//     break;
//     case 3 :
//         console.log('Today it\'s Wednesday');
//     break;
//     case 4 :
//         console.log('Today it\'s Thursday');
//     break;
//     case 5 :
//         console.log('Today it\'s Friday');
//     break;
//     case 6 :
//         consle.log('Today it\'s Saturday');
//     break;
//     case 7 : 
//         console.log('Today it\'s Sunday');
//     break;
//     default:
//         console.log('Error: Please input a number bettwen 1 and 7');
//     }
// // No2 using If/Else/If
//     if (weekDayNumber === 1) {
//         console.log('Today it\'s Monday');
//     } 
//     else if (weekDayNumber === 2) {
//         console.log('Today it\'s Tuesday');
//     } 
//     else if (weekDayNumber === 3) {
//         console.log ('Today it\'s Wednesday');
//     }
//     else if (weekDayNumber === 4) {
//         console.log('Today it\'s Thursday');
//     }
//     else if (weekDayNumber === 5) {
//         console.log('Today it\'s Friday');
//     }
//     else if (weekDayNumber === 6) {
//         console.log('Today it\'s Saturday');
//     }
//     else if (weekDayNumber == 7) {
//         console.log('Today it\'s Sunday');
//     }
//     else console.log('Error: Please input a number bettwen 1 and 7');

// No3 using Refactor
switch (weekDayNumber) {
    case 1 :
    message = ('Today it\'s Monday'); 
    break;
    case 2 :
    message = ('Today it\'s Tuesday');
    break;
    case 3 :
    message = ('Today it\'s Wednesday');
    break;
    case 4 :
    message = ('Today it\'s Thursday');
    break;
    case 5 :
    message = ('Today it\'s Friday');
    break;
    case 6 :
    message = ('Today it\'s Saturday');
    break;
    case 7 : 
    message = ('Today it\'s Sunday');
    break;
    message = ('Error: Please input a number bettwen 1 and 7');   
}
console.log (message);