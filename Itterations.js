//itteration
const dogs = ["Labrador", "Beagle", "Poodle", "Pug", "Chihuahua"];

const printDogName = (dogName) => {
  console.log("The " + dogName + " barks.");
};

dogs.forEach(printDogName);

//To uppercase
const printDogNameUppercase = (dogName) => {
  console.log("The " + dogName.toUpperCase() + " barks.");
};

dogs.forEach((dog) => {
  printDogNameUppercase(dog);
});

//Anonymus function

dogs.forEach(function (dogName) {
  console.log("The " + dogName + " needs to go for a walk!");
});
