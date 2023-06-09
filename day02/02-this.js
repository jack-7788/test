function Person(name, age) {
    this.name = name
    this.age = age
    this.say = function (str1, str2) {
        console.log(`${this.name}-${this.age}-${str1}-${str2}`)
    }
}
const p1 = new Person('zs', 18)
const p2 = { name: 'ls', age: 19 }
p1.say('p1')
// p2.say()
p1.say.call(p2, '111', '22')
p1.say.apply(p2, ['111', '22'])
p1.say.bind(p2, '333', '333333')() //旧一点的react中使用最多
console.log('p1: ', p1)

// function fn(num) {
//     if (num === 1) {
//         return 1
//     } else {
//         return num + fn(num - 1)
//     }
// }
// console.log(fn(3))
//闭包
//缺点：内存泄漏
//优点：防止全局变量污染
// function fn() {
//     let num = 10
//     return function () {
//         console.log(num)
//     }
// }
// fn()()

function fn() {
  var a = 0; 

  return function() {
      a++;
      console.log(a);
  }

}

var f1 = fn();

f1();
f1();
f1();
