// const arr = [
//     { id: 1, name: 'zs' },
//     { id: 2, name: 'ls' },
//     { id: 3, name: 'ww' },
// ]
// //{1:zs,2:ls,3:ww}

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];

// }
//forEach
// arr.forEach((item, inx, self) => {
//     console.log('item,inx,self): ', item, inx, self)
// })
// map 返回新数组不会改变原数组长度
// const mapArr = arr.map((item, inx, self) => {
//     console.log('item,inx,self: ', item, inx, self)
//     item.age = inx
//     return item
// })
// console.log(mapArr)

//filter 返回满足条件的新数组
// const filterArr = arr.filter((item, inx, self) => {
//     // return Boolean
//     return item.id !== 2
// })
// console.log(filterArr)

// some boolean 满足一个条件就是true
// const someArr = arr.some(item => {
//     return item.id === 2
// })
// console.log(someArr)

//every 所有为true 才是true
// const everyArr = arr.every(item => {
//     return item.id === 2
// })
// console.log(everyArr);

//findIndex  查找存在的下标，  不存在返回-1
// const inx = arr.findIndex(item => {
//     return item.id === 3
// })
// console.log(inx);

//find 查找符合条件的一项 ， 不存在返回 undefined
// const findItem = arr.find(item => {
//     return item.id === 4
// })
// console.log(findItem)

// includes 查找是否存在
// const strArr = ['a', 'b', 'c', 'd']
// const res = strArr.includes('b')
// console.log('res: ', res)

//reduce
// const numArr = [1, 3, 5, 7, 8]
// const total = numArr.reduce((prev, item, inx, self) => {
//     prev = prev + item
//     return prev
// }, 0)
// console.log('total: ', total)

// const strArr = ['a', 'b', 'c', 'd']
// const total = strArr.reduce((prev, item, inx, self) => {
//     prev = prev + item
//     return prev
// }, '')
// console.log(total);

// const arr = [
//     { id: 1, name: 'zs' },
//     { id: 2, name: 'ls' },
//     { id: 3, name: 'ww' },
// ]
//{1:zs,2:ls,3:ww}
// const res = arr.reduce((prev, item) => {
//     prev[item.id] = item.name
//     return prev
// }, {})
// const res = arr.reduce((prev, item, inx) => {
//     item.age = inx
//     prev.push(item)
//     return prev
// }, [])
// console.log(res)
