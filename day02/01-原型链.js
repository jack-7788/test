function Person(name, age) {
    this.name = name
    this.age = age
    // this.say = function () {
    //     console.log(`${this.name}-${this.age}`)
    // }
}
Person.prototype.say = function () {
    console.log('xxxx', this.age, this.name)
}

const p1 = new Person('zs', 18)
const p2 = new Person('ls', 19)
console.log('p2: ', p2)
console.log('p1: ', p1.__proto__.constructor
)
p1.say()
p2.say()
