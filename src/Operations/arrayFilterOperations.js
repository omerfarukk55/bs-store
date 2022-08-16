const arr=[1,2,3,4,5]
const input=prompt()
const selectİtem=2
let newArry=[];

for (const item of arr) {
    if(item!==3){
        newArry.push(item);
    }
}
const newfilterarry =arr.filter(num=>num!==input);
console.log(arr)
console.log(newArry)
console.log(newfilterarry)