const iceCreamFlavors = ['amaretto',
'mocca',
'mango',
'mint with chocolate',
'stracciatella',
'tiramisu',
'coconut',
'vanilla',
'orange',
'kiwi' ];

const removeKiwi = iceCreamFlavors.pop();
const removeOrange = iceCreamFlavors.pop();
const removeVanilla = iceCreamFlavors.pop();
const removeCoconut = iceCreamFlavors.pop();

console.log(iceCreamFlavors)

console.log(`Removed flavour: ${removeKiwi}, ${removeOrange}, ${removeVanilla}, ${removeCoconut}`);