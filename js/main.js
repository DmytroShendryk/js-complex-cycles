//Task 1
let str = 20;
    for(let i = 20.5; i <= 30; i = i + 0.5){
        str = str + ", " + i;
    }
console.log(str);
//task 2
let uahToDol = 27;
    for(let i = 10; i <=100; i++){
        if(i % 10 === 0){
            console.log(`${i} $ is ${i * uahToDol} uah`);
        }
    }
//task 3
const nSqrt = function * (n){
    const limit = Math.min (100, Math.sqrt(n));
    let i = 1;
    while(i <= limit){
        yield i++
    }
}
let n = 10201;
for(const x of nSqrt(n)) {
    console.log(`number is ${x}`);
}
//task 4
let prNum = prompt("enter the number") ;
function isPrime(prNum) {
    if (prNum < 2) {
      return 'number us less than 1';
    } else if (prNum === 2) {
      return 'Prime number';
    }
  
    let i = 2;
    const limit = Math.sqrt(prNum);
    while (i <= limit) {
      if (prNum % i === 0) {
        return 'composite number';
      }
      i +=1;
    }
    
    return 'Prime number';
  }
  console.log(`${prNum} is ${isPrime(prNum)}`);
//task 5
let num = prompt('enter the number');
let isPowerOfThree = function (num){
    if (num === 0){
        return false
    }
    while (num % 3 === 0){
        num /=3;
    }
        return num === 1
}
console.log(`${num} is ${isPowerOfThree(num)}`);