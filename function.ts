
function count(array:any[]):any {
   
    let myobj = {};

    for (let arrindex in array) {

        if (array[arrindex] in myobj) {
            myobj[array[arrindex]]++;
        }
        else {
            myobj[array[arrindex]] = 1;
        }
    }

    console.log(myobj);
    return myobj;

}
count([12,'33',12,true,5,3,1,3])