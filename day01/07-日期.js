const time = new Date()
const year = time.getFullYear()
console.log('year: ', year)
const month = time.getMonth() + 1
console.log('month: ', month)
const day = time.getDay() //星期
console.log('day: ', day)
const date = time.getDate()
console.log('date: ', date)
console.log('当前日期', `${year}-${month}-${date} : ${day}`)
console.log(time)

const times = +new Date() - new Date('2023-6-8')
// if(times){
//   //TODO
// }

// console.log('times: ', times);

// const current = +new Date() //ms
const year1 = times / (1000 * 60 * 60 * 24)
const hour = times / (1000 * 60 * 60)
console.log('hour: ', hour)
console.log('year: ', year1)
