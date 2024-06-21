function createCounter(delta = 1){
    let count = 0

    function increment(){
        console.log('Count =',count)
        count += delta
    }

    return increment
}

const counter1 = createCounter(2)
const counter2 = createCounter(10)


counter1()
counter1()
counter1()
counter2()
counter2()
counter2()
