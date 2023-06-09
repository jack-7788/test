const obj = {
    name: 'zs',
    age: 18,
}
// obj.name = 'ls'
console.log(obj)
for (const key in obj) {
    console.log(obj[key], key)
}

// let obj2 = obj
// obj2.name = 'ww'
// obj2.height = 190
// // console.log(this);
// console.log(obj, obj2)//zs-18 /ww-18
// console.log(obj===obj2);

// let obj2 = {
//   name: 'zs',
//   age: 18,
// }
// obj2.name = 'ww'
// obj2.height = 190
// // console.log(this);
// console.log(obj, obj2)//zs-18 /ww-18
// console.log(obj===obj2);

// let str = 'zs'
// let str2 = str//str2 ='zs'
// str2 = 'ww'//
// str = 'ls'
// console.log(str , str2);//ls ww

//  首字母必须大写 -构造函数
// function Obj(name, age) {
//     this.name = name
//     this.age = age
//     // this 指向当前实例
// }
// const obj1 = new Obj('zs', 18)
// console.log('obj1: ', obj1)
// const obj2 = new Obj('ls', 19)
// console.log('obj2: ', obj2)
