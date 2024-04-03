let given=6;
let arr=[]
let value;
while(given>1){
    arr.push(given);
    given--;
}
let multi=(x,y)=>{
    return x*y
}
console.log(arr.reduce(multi));

