

function mycompare(xarr:number[], yarr:number[]):boolean {

    if (xarr.length !== yarr.length) {
        return false;
    }

    for (let index = 0; index < xarr.length; index++) {
        if (xarr[index] !== yarr[index]) {
            return false;
        }
    }

    return true;
}

let mystrarr:string[];
let myboolarr:boolean[];


console.log(mycompare([3, 4, 41], [3, 4, 4]));