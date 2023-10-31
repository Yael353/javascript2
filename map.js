// Map
const doggieWalks = dogs.map((dogName) => {
  return "The " + dogName + " needs to go for a walk!";
});

console.log(doggieWalks);

//task 3
const shoutyDogNames = dogs.map((dogName) => {
  return dogName.toUpperCase();
});

console.log(shoutyDogNames);
