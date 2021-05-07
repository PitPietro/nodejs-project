const importedStuff = require('./pets');
console.log("pets are: ", importedStuff.pets);
console.log("their owners are: ", importedStuff.owners);

const {pets, owners} = require('./pets');
console.log("pets are: ", pets);
console.log("their owners are: ", owners);
