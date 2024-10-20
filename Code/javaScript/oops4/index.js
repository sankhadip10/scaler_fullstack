//In 2025 a new .myCall function 
if(!Function.prototype.myCall){
    Function.prototype.myCall =function(context){
        //polyphill for .call
        console.log(`This is my call`)
    }
}




const sankha ={
    fname:'Sankah',
    lname:'das',


    displayFullName(){
        console.log(`${this.fname} ${this.lname}`)
    }
}

test1.myCall(sankha)

// setTimeout(sankha.displayFullName,4*1000)
// setTimeout(()=>sankha.displayFullName(),4*1000)


const john ={
    fname:'John',
    lname:'Doe',


    displayFullName(){
        console.log(`${this.fname} ${this.lname}`)
    }
}


// const ref =john.displayFullName
// ref.call(john)
// ref.call(sankha)
// ref()


// function test(){
//     console.log(`This is test function ${this.fname}`)
// }

// test.call(sankha)


function test1(a,b,c){
    console.log(`This is a function for ${this.fname}`,a+b+c)
}

// test1.call(sankha,1,2,3)
// test1.apply(sankha,[2,3,4])

// const storeRef = test1.bind(sankha)
// storeRef(1,2,4)
// storeRef(1,2,4)
// storeRef(1,2,4)

const obj ={
    fname:'Testing'
}

function dummy(){
    console.log(this.name)
}

obj.hululu = dummy
obj.hululu()
