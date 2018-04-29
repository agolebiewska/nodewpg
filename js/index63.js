const year = 2012;
let champion 



if (year < 2006 || year > 2017) {
    console.log(`Sorry, please try a differnt year`)
} else {
    switch (year) {
        case 2017: 
            champion = 'Pittsburgh Penguins';
            break;
        case 2016:
            champion = 'Pittsburgh Penguins';
            break;
        case 2015:
            champion = 'Chicago Blackhawks ';
            break;
        case 2014:
            champion = 'Los Angeles Kings';
            break;
        case 2013:
            champion = 'Chicago Blackhawks';
            break;
        case 2012:
            champion ='Los Angeles Kings';
            break;
        case 2011:
            champion = 'Boston Bruins';
            break;
        case 2010:
            champion = 'Chicago Blackhawks';
            break;
        case 2009:
            champion = 'Pittsburgh Penguinas';  
            break;
        case 2008:
            champion = 'Detroit Red Wings';
            break;
        case 2007:
            champion = 'Anaheim Ducks';
            break;
        case 2006:
            champion = 'Carolina Hurricanes';
            break;
        default: 
        }
            console.log(`${champion} was the ${year} NHL Champion`);
    }

// Show the following ouptup depending the selected year:
// If the value it's not bettwen 2006 and 2017 show the following error: Sorry, please try a differnt year
// Use a switch statement to check for the selected year value `` 
 
// 2012 - Los Angeles Kings 
// 2011 - Boston Bruins 
// 2010 - Chicago Blackhawks 
// 2009 - Pittsburgh Penguinas 
// 2008 - Detroit Red Wings 
// 2007 - Anaheim Ducks 
// 2006 - Carolina Hurricanes
// * Try all the posible cases/scenarios (even the error message) by changing the year value
