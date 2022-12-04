class Person {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`Hello ${this.name}, ${this.age}`)
  }

}

module.exports = Person;