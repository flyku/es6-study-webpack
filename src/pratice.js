/***
let c = new class{
    constructor(name){
        this.name = name;
    }
    sayName(){
        console.log(this.name);
    }
}("flyku") 
c.sayName();

class me{
    constructor(){}
    toGo(){}
}

const o = Object.create({ x: 1, y: 2 });
console.log(o)
o.z = 3;
console.log("------",o.x)
console.log("------",o.y)
console.log("------",o.z)
let { x, ...newObj } = o;
let { y, z } = newObj;
console.log("------",newObj)
console.log(x)
console.log(y)
console.log(z)


const s = new Set();
// [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
// console.log([...s])


s.add(1).add(2).add(2);//只添加一次2

console.log(s)


 */

// var obj = new Proxy({}, {
//     get: function (target, key, receiver) {
//       console.log(`getting ${key}!`);
//       return Reflect.get(target, key, receiver);
//     },
//     set: function (target, key, value, receiver) {
//       console.log(`setting ${key}!`);
//       return Reflect.set(target, key, value, receiver);
//     }
//   });

//   obj.count = 1
// //  setting count!
// ++obj.count
// //  getting count!
// //  setting count!
// console.log(obj.count)
// //  2
let promise = new Promise((resolve, reject)=> {
    console.log('1');
    return resolve("flyku");
  });
  promise.then((resolve)=> {
    console.log('2');
    resolve("value");
  }).then((value)=>{
      console.log("flykus========",value);
  });
  
  console.log('Hi!');