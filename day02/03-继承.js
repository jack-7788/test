// function Animo(type, name) {
//     this.type = type
//     this.name = name
// }

// function Dog(color, height, type, name) {
//     Animo.call(this, type, name)
//     this.color = color
//     this.height = height
// }
// const d = new Dog('pink', 100, '藏獒', '旺财')
// console.log('d: ', d);

function Person(name, age) {
    this.name = name
    this.age = age
}
Person.prototype.say = function () {
    console.log(this,'xxx')
}

function Chinese(city ) {
    this.city = city
}
Chinese.prototype = new Person()//Person.prototype
// Chinese.prototype.constructor =new Chinese

const c = new Chinese('上海','zs',18)
c.say()
console.log(c.__proto__);

console.log('c: ', c)
