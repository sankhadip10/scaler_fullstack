function printName(cb){
    console.log("Shikhar");
    cb();
}

function printLastName(){
    console.log("Singh");
}

function printAge(){
    console.log(24)
}


printName(printLastName);
printName(printAge);