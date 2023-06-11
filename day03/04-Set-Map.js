//Set - 没有重复数据的集合

// [1,2,3,45,6].includes()

const set = new Set()
set.add(1)
set.add(3)
// set.add(1)
set.forEach(item => {
    console.log('item: ', item)
})
console.log([...set.keys()])
console.log([...set.values()])
console.log([...set.entries()])
set.delete(1)
console.log(set.size)
console.log(set.has(3))
set.clear()
console.log(set)

// const arr =[12,1,2,4,5,1,2,3]
// console.log([...new Set(arr)]);

//Map
// WeakMap()
// const obj = { name: 'ls' }
// const map = new Map()
// map.set('xasda', { name: 'zs' })
// map.set('fn', () => {})
// map.set(obj, () => {
//     console.log(11)
// })
// console.log(map.get(obj))
// map.forEach((v, k) => {
//     console.log('k: ', k)
//     console.log('v: ', v)
// })
// console.log(map.values())
// console.log(map.entries())
// console.log(map.has('fn'))
// console.log(map.size)
// console.log(map.has('fn'))
// map.clear()
// map.delete(obj)
// console.log('map: ', map)

// const arr = [
//     { id: 1, name: 'zs' },
//     { id: 2, name: 'ls' },
//     { id: 1, name: 'zs' },
// ]
// // console.log([...new Set(arr)]);
// const map = new Map()
// arr.forEach(item => {
//     if (!map.has(item.id)) {
//         map.set(item.id, item)
//     }
// })
// console.log('map',[...map.values()]);


//https://es6.ruanyifeng.com/#docs/set-map