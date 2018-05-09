let color = '';

function getHexaColor (color) {
    
    switch (color) {
        case ('white') : 
            return 'value: #FFFFFF';
            break;
        case ('black'):
            return 'value: #000000';
            break;
        case ('blue'):
            return 'value: #0b24fb';
            break;
        case ('green'):
            return 'value: #0e7e12';
            break;
        case ('yelow'):
           return 'value: #fffd38';
           break;
        case ('pink'):
           return 'value: #fec1cc';
           break;
        default:
    }    
}
console.log(getHexaColor('green'));
console.log(getHexaColor('pink'));
