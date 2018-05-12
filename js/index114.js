
function revert(string) {
    let stringLength = string.length;
    let revert = "";
    for (stringLength; stringLength >= 1; stringLength--) {

        revert = revert + string.charAt(stringLength -1)
    }
        console.log(revert);
}

revert('Jakub');
revert('yesterday');
revert('table');
revert('wine');
revert('flower');

