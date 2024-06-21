function a(){
    let age = 30

    function tellMyage(){
        console.log('your age is ',age)
    }

    age = 24
    return tellMyage
}

const fn = a()


fn()
fn()
fn()