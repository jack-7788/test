// const arr = []
// const arr1 = new Array('zs', 'ls', 'ww')
// console.log('arr1: ', arr1)
// console.log(arr1[2])
// arr1[1] = 'zl'
// console.log(arr1)
// for (let i = 0; i < arr1.length; i++) {
//     const element = arr1[i]
//     console.log('element: ', element)
// }
// const unshiftBack = arr1.unshift('unshift')
// console.log('unshiftBack: ', unshiftBack, arr1)
// const pushBack = arr1.push('push')
// pushBack--['zs', 'ls', 'ww','push] , arr1- ['zs', 'ls', 'ww','push]
// console.log('pushBack: ', pushBack, arr1)
// function fn(){
//   return 123
// }
// const num = fn()
// const popBack = arr1.pop()
// console.log('arr1: ', arr1, popBack)
// const shiftBack = arr1.shift()
// console.log('shiftBack: ', shiftBack,arr1);

// const arr = ['zs', 'ls', 'ww', 'zl']

// join
// console.log(arr.join('++++'))
// const numArr=[1,2,3]
// console.log(numArr.join('+'));//

//reverse
// const newArr = arr.reverse()
// console.log('newArr: ', newArr)

// const numArr = [3, 12, 20]
//sort
// console.log(numArr.sort((a, b) => b - a))
//indexOf
// console.log(numArr.indexOf(12));

// const numArr = [3, 12, 20, 12, 20]
// numArr.indexOf()
// console.log([...new Set(numArr)]);
// let newArr = []
// for (let i = 0; i < numArr.length; i++) {
//     const flag = newArr.indexOf(numArr[i])
//     if (flag === -1) {
//         newArr.push(numArr[i])
//     }
// }
// console.log(newArr);

// let newArr = []
// for (let i = 0; i < numArr.length; i++) {
//     const flag = newArr.includes(numArr[i])//boolean
//     if (!flag) {
//         newArr.push(numArr[i])
//     }
// }
// console.log(newArr);

//concat
const arr1 = [1, 2, 3, 4, 5, 6]
const arr2 = [7, 8, 9]

// const arr3 = arr1.concat(arr2)
// const arr3 =[...arr1 , ...arr2]
// console.log('arr3: ', arr3);

//[3,4]
// slice 不改变原数组
// const arr4 = arr1.slice(2, 4)// 开始下标 - 结束下标
// console.log('arr4: ', arr4 , arr1)

//splice - 改变原数组
// const arr5 = arr1.splice(2, 4)// 开始下标 - 数量
// console.log('arr5: ', arr5 ,arr1);

var arr = ['c', 'a', 'z', 'a', 'x', 'a', 'a', 'z', 'c', 'x', 'a', 'x']

// 1. 获取数组中每个元素出现的次数 {c:1 , a:1 , x:1}
let obj = {}
for (let i = 0; i < arr.length; i++) {
    const element = arr[i] //c
    if (obj[element]) {
        obj[element] += 1
    } else {
        obj[element] = 1
    }
}
console.log('obj', obj)

// 2. 获取数组中出现次数最多的元素以及次数
let maxStr='';
let maxNum=0;
for (const k in obj) {
    const element = obj[k]
    if (element > maxNum) {
        maxNum = element
        maxStr = k
    }
}
console.log(maxStr,maxNum );
