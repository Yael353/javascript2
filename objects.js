//Objects
const person = {
  studentAt: "Chas",
  name: "Yaser",
  age: 35,
};

console.log(person);

person.favoriteFoods = ["Pizza", "Sushi", "Chocolate", "Ice Cream"];

console.log(person.favoriteFoods);

// Task 3
console.log(person.name);
console.log(person.age);

// Task 4

person.eyeColor = "Brown";
console.log(person);

// Task 5

const dogz = {
  labrador: {
    adult: {
      name: "Marley",
    },
    puppy: {
      name: "Buster",
    },
  },
};

console.log(dogz.labrador.puppy.name);
