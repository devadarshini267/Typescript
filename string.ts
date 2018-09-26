
import { count } from "./count";
import { maxoccur } from "./occurrence";


let string1 = "accordance";

function split(strvar: string): string[] {

    let strarr: string[] = [];

    for (let position = 0; position < strvar.length; position++) {
        let element: string = strvar.substr(position, 1);
        strarr.push(element);
    }
    console.log(strarr);
    return strarr;

}

let lsplit: string[] = split(string1);
let lobj: any = count(lsplit);
console.log(maxoccur(lobj));





