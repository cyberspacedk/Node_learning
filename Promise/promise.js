
// CALL BACK HELL
// const startAftertime = (time, cb)=>  setTimeout(cb, time);

const question = ()=> confirm('How about go to shop'); 
const moveToShop = ()=> console.log('Go to shop'); 
const chooseProduct = ()=> console.log('I choose goods'); 
const getPay = ()=>console.log('Make payment');

// if(question()){
//   startAftertime(3000, ()=> {
//     moveToShop();
//     startAftertime(2000, ()=>{
//       chooseProduct();
//       startAftertime(3000, ()=> {
//         getPay();
//       })
//     })
//   })
// }

const startAftertime = (time, cb)=> {  
  return new Promise((resolve, reject)=>{
    setTimeout(cb, time); 
    return resolve();
  }) 
}

if(question()){
  startAftertime(3000, moveToShop).then(data=> console.log("OK", data))
}