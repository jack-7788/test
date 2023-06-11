// 回头调用 = 回调

function callBack() {
    console.log('1')
    return () => {
        console.log('2')
    }
}

function fn(a, b, cb) {
  console.log(3);
    // console.log(a + b)
    if (a + b > 10) {
        cb()
        console.log(4);
    }
}

//期望 总和大于10 的时候，执行 指定的行为
fn(10, 2, callBack())
//3-1-2-4
//1-3-2-4

// 回调地狱 - 多重回调

// function fn(cb){
//   if(true){
//     fn2cb
//   }
// }
// function fn2(){
//   if(true){
//     fn3()
//   }
// }
// function fn3(){
//   if(true){
//     //......
//   }
// }
// fn()