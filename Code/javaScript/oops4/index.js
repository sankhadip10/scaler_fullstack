//In 2025 a new .myCall function is coming
if(!Function.prototype.myCall){
    Function.prototype.myCall =function(context,...args){
        //polyphill for my .call
        // console.log(`This is my call`)
        const myFn = Symbol('myFn');

        context[myFn] = this;
        context[myFn](...args);
        delete context[myFn];
        
        // context.hululu =this
        // context.hululu(...args)

        // delete context.hululu
    }
}

if(!Function.prototype.myApply){
    Function.prototype.myApply =function(context,args=[]){
        //polyphill for my .call
        // console.log(`This is my call`)
        const myFn = Symbol('myFn');

        context[myFn] = this;
        context[myFn](...args);
        delete context[myFn];
        
       
    }
}

if(!Function.prototype.myBind){
    Function.prototype.myBind =function(context,...args){
        //polyphill for my .call
        // console.log(`This is my call`)
        const functionToCall = this

        return function(...extraArgs){
            functionToCall.myApply(context,[...args,...extraArgs])
        }
        
       
    }
}




const sankha ={
    fname:'Sankah',
    lname:'das',

    
    displayFullName(){
        console.log(`${this.fname} ${this.lname}`)
    }
}

test1.myCall(sankha,1,2,10)
console.log(sankha)


test1.myApply(sankha,[1,2,3])
// setTimeout(sankha.displayFullName,4*1000)
// setTimeout(()=>sankha.displayFullName(),4*1000)
const ref = test1.myBind(sankha,1,2)
ref(2)
ref(9)

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
    console.log(this.fname)
}

obj.hululu = dummy

obj.hululu()
// console.log(obj)