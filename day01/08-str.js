const str1 = 'abcdefg'
console.log(str1.substr(2,2),str1);// 开始下标 - 个数
console.log(str1.slice(2,4),str1);// 开始下标- 结束下标
console.log(str1.slice(2,-1),str1);// 开始下标- 结束下标 -支持负数
console.log(str1.substring(2,4));// 开始下标- 结束下标 -不支持负数
const str2 = 'ab,Acd,efga'

const newArr = str2.split(',')//切割
const newStr = newArr.join('+')
console.log('newStr: ', newStr);
console.log(newArr);
// console.log(str2.replace(',','-'));//'ab-cd-efg'
//正则
console.log(str2.replace(/\,/g,'-'));//'ab-cd-efg'
console.log(str2.replace('a','A')); 
console.log(str2.replace(/a/ig,'A')); 
console.log(str2.replaceAll('a','A')); 

