import * as pg from "./mymodule";


pg.myfunction();

function myenumfunction(myvar:Gender):Gender
{
    switch(myvar)
    {
        case Gender.Female:
        console.log("Female");
        break;

        case Gender.Male:
        console.log('Male');
        break;

        default:
        console.log('Notknown');
        break;
    }

    return Gender.Male;
}

enum Gender  // number, string
{
    Male = 2,
    Female
}

let mygender:Gender = Gender.Female;

console.log(mygender);
myenumfunction(Gender.Male);