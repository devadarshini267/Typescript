

function sum(intvar:number):number {
    let num = 1;
    let add = 0;
    while (num <= intvar) 
    {
   
    add += num;
    num++;
    }
return add;
}
console.log(sum(15));