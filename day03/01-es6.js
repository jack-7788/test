// Object.keys()
// const obj = { name: 'zs', age: 18 }
//['name','age']
// console.log(obj.toString());
// const arr =[]
// for (const k in obj) {
//   console.log('k: ', k);
//   arr.push(k)
// }
// console.log(arr);

// console.log(Object.keys(obj));

// Object.keys(obj).forEach(item=>{
//   console.log(item,obj[item]);
// })

//['zs',18]
// console.log(Object.values(obj));

//[[name,'zs'],['age',18]]
// console.log(Object.entries(obj));

//解构

// const obj = { name: 'zs', age: 18 }

// obj.name / obj.age

// const { name, age } = obj
// console.log('name, age : ', name, age );

// const arr = ['zs', 'ls']
// // arr[0] / arr[1]

// const [ str1 , str2  ] = arr
// console.log(' str1 , str2: ',  str1 , str2);

// const list = [
//     { name: 'zs', age: 18 },
//     { name: 'ls', age: 19 },
// ]

// const [str, str2] = list

// const { name } = str
// console.log('name: ', name);

// const { name:name2 } = str2
// console.log('name2: ', name2);

// const [{ name }, { name: name2 }] = list
// console.log('name2: ', name2)
// console.log('name: ', name)

// 展开运算符   ...
// const obj = { name: 'zs' }
// // obj={name:'zs',age:18}
// // obj.push(...obj,)
// // const newObj = { ...obj}//浅拷贝
// const newObj = { ...obj,age:18}
// console.log('newObj: ', newObj);
// const arr = ['zs']
//['zs','ls']
// const newArr =[...arr ,'ls']
// console.log('newArr: ', newArr);

// 浅拷贝

// const arr = [{ name: 'zs' }]
// const newArr = [...arr]
// console.log('newArr: 1', newArr);
// debugger
// arr[0].name='ls'
// console.log('newArr:2 ', newArr);

// const newArr = JSON.parse(JSON.stringify(arr))
// arr[0].name='ls'
// console.log('arr: ', arr);
// console.log('newArr: ', newArr);

//函数拷贝
// const copyObj = (obj = {}) => {
//     //变量先置空
//     let newobj = null
//     //判断是否需要继续进行递归
//     if (typeof obj == 'object' && obj !== null) {
//         newobj = obj instanceof Array ? [] : {} //进行下一层递归克隆
//         for (var i in obj) {
//             newobj[i] = copyObj(obj[i])
//         } //如果不是对象直接赋值
//     } else newobj = obj
//     return newobj
// }

// console.log(copyObj(arr));

//默认参数
// function fn(str = 'zs') {
//     console.log(str)
// }
// fn('ls')

//剩余参数

// function fn(a, b, c, d,...rest) {// es6
//     console.log('rest: ', arguments) //伪数组 有下标 有length es5
//     const arr = [...arguments]
//     console.log('arr: ', arr)
//     console.log('a,b,c,d: ', a, b, c, d)
// }
// fn(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)

// 伪数组转真数组
// function fn(a, b, c, d) {
//     // es6
//     console.log('rest: ', arguments) //伪数组 有下标 有length es5

//     //
//     const arr = [...arguments]

//     console.log(Array.from(arguments))

//     console.log('arr: ', arr)
//     console.log('a,b,c,d: ', a, b, c, d)
// }
// fn(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)

// const str = 'abcd'

//  const flag =  str.includes('b')
//  const flag =  str.startsWith('ab')
//  const flag =  str.endsWith('d')
//  console.log('flag: ', flag);

// const str = 'zs'
// const obj = { str }
// console.log('obj: ', obj);

let list = [
    // wu: 武力    zhi:智力
    { id: 1, name: '张飞', wu: 97, zhi: 10 },
    { id: 2, name: '诸葛亮', wu: 55, zhi: 99 },
    { id: 3, name: '赵云', wu: 97, zhi: 66 },
    { id: 4, name: '周瑜', wu: 80, zhi: 98 },
    { id: 5, name: '吕布', wu: 100, zhi: 8 },
    { id: 6, name: '司马懿', wu: 30, zhi: 98 },
]

// + 求数组中所有英雄的武力平均值
// 汇总
const total = list.reduce((t, v) => {
    t += v.wu
    return t
}, 0)
console.log(total / list.length)

// + 得到一个新数组，只保留英雄的名字， `['张飞', '诸葛亮', '赵云', '周瑜', '吕布', '司马懿']`

// let newArr =list.map(item=>item.name)
// console.log('newArr: ', newArr);
// newArr.keys()

// + 得到一个新数组，新数组中只保留武力值超过90的英雄

// filter
//  const newArr =  list.filter((item)=>item.wu>90)
//  console.log('newArr: ', newArr);

// + 删除数组中名字为周瑜的英雄
const newArr = list.filter(item => item.name !== '周瑜')

// + 判断数组中所有英雄的武力是否都超过60， 最终打印结果： `全是猛将`  `还有弱鸡`
// + 删除数组中有智力低于60的英雄
// + 找到数组中id为2的英雄，求他的武力+智力的综合
const { wu, zhi } = list.find(item => item.id === 2)
console.log('wu ,zhi: ', wu, zhi)
// const total1 = findItem.wu + findItem.zhi
// console.log('total: ', total1)
