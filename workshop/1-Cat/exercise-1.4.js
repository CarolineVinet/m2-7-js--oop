// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

// B) Make Boots wait 20 minutes and call then console.log(boots);

class Cat {
  constructor(name, breed) {
    this.species = "cat";
    this.name = name;
    this.breed = breed;
    this.tiredness = 0;
    this.hunger = 0;
    this.loneliness = 0;
    this.happiness = 0;
  }

  sleep = (num) => {
    this.tiredness -= num * 5;
    this.happiness += num * 2;
  };

  eat = (kibbles) => {
    this.hunger -= kibbles / 5;
    this.happiness += kibbles * 3;
  };

  play = (minutes) => {
    this.loneliness -= minutes * 3;
    this.happiness += minutes * 6;
  };

  wait = (minutes) => {
    this.tiredness -= minutes / 5;
    this.hunger -= minutes / 5;
    this.loneliness -= minutes / 5;
    this.happiness -= minutes / 5;
  };
}

const boots = new Cat("boots", "siamese");

boots.wait(20);

console.log(boots);
