// Promise
// .then - 成功的时候执行
// .catch - 失败的时候执行
// .finally - 不论成功或者失败都执行
//不会同时执行成功和失败
// 可以链式调用 - 参数是上一次的return
// 不会阻塞代码执行


// async await 回阻塞代码执行
function fn() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(4)
            // reject('false')
            resolve('success')
        }, 1000)
    })
}
// fn()
//     .then(res => {
//         console.log(res)
//         return res + '1212121'
//     })
//     .then(res => {
//         console.log('res: 123', res)
//         return res + '456'
//     })
//     .then(res => {
//         console.log('res456', res)
//     })
//     .catch(err => {
//         console.log('err: ', err)
//     })
//     .finally(() => {
//         console.log('end')
//     })

async function play() {
    //13524
    // console.log(1)
    // fn().then(res => {
    //     console.log(2)
    //     console.log('res: ', res)
    // })
    // console.log(3)
    // fn().then(res => {
    //     console.log(4)
    //     console.log('res: ', res)
    // })
    // console.log(5)

    // const res = await fn().catch(res=>{
    //   console.log('catch',res);
    // })
    // console.log('res: ', res)

    //*******
    // try {
    //     const res = await fn()
    //     console.log('res: ', res)
    // } catch (error) {
    //     console.log('error: ', error)
    // }finally{
    //   console.log('end');
    // }

    // console.log(1)
    // await fn()//4
    // console.log(2)
    // await fn()//4
    // console.log(3)
    // //12344 / 14243


    //全部成功才是成功
    // Promise.all([fn(),fn()]).then(res=>{
    //   console.log('res: ', res);
    // }).catch(err=>{
    //   console.log('err: ', err);
    // })
}
play()
