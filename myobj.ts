
interface IPerson {
    name: string,
    age: string,
    lastname: string
}

let myobj: IPerson = { name: 'kanagaraj', age: '38', lastname: 'palanisamy' };
let myanotherobj:IPerson = <IPerson>{};
let myanyobj:any = {};
myanotherobj.lastname = 'palani';
myanotherobj.name = 'kana';


console.log(myobj.lastname);