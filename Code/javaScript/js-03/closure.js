function a(){
    let age = 24

    function tellMyAge(){
        console.log("Your age is",age)
    }

    age = 24
    return tellMyAge
}


const fn = a()
console.log(fn)



