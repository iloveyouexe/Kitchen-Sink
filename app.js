let name = "Hunter";
const states = 50;
let num = console.log(5 + 4); //ANCHOR This means the variable "num" is adding the elements 5 and 4.

function sayHello() {
  alert = "Hello World";
}

function checkAge(name, age) {
  if (age < 21) {
    alert("Sorry " + name + ", you aren't old enough to view this page!");
  }
}
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let vegtables = ["Garlic", "Tomato", "Potato", "Jalapeno"];
for (let i = 0; i < vegtables.length; i++) {
  console.log(vegtables[i]);

  let pet = {
    name: "Mochi",
    breed: "cat",
  };

  pet.name;
  pet.breed;
}
let friends = [
  {
    name: "Jon",
    age: 40,
  },
  {
    name: "Zuka",
    age: 29,
  },
  {
    name: "Zeal",
    age: 17,
  },
  {
    name: "Kaley",
    age: 21,
  },
  {
    name: "Daze",
    age: 41,
  },
];

for (let i = 0; i < friends.length; i++) {
  checkAge(friends[i].name, friends[i].age);
}
function getLength(string) {
  return string.length;
}
let length = getLength("Hello World");
if (length % 2 === 0) {
  console.log("The world is nice and even!");
} else {
  console.log("The world is an odd place!");
}
