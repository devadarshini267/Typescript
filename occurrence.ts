

export function maxoccur(obj:any):string {

    let max:number = 0;
    let maxkey:string = '';
    for (let lkey in obj) {
        if (max < obj[lkey]) {
            max = obj[lkey];
            maxkey = lkey;
        }
    }

    console.log(maxkey);
    return maxkey;

}


