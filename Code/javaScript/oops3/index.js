// const person = {
//     fname:'Sankha',
//     favColor:'black',

//     display(){
//         console.log(`${this.fname} likes ${this.favColor}`);
//     }

// }


// person.display()

class A{
    specialFnForA(){
        console.log(`A`)
    }

}

class B extends A {
    constructor(){
        super()
        this.favColor ='Black'
    }
    specialFnForB(){
        console.log(`B`)
    }
}

const b = new B()


const person ={
    fname:'Sankha',
    favColor:'black',

    display(){
        console.log(`${this.fname}`)
    }

}

// const hack ={
//     fname:'Hack',
//     hasOwnProperty(){
//         console.log('Custom Property')
//     }
// }


// hack.__proto__={
//     aniket:function(){
//         console.log('Aniket fn')
//     }
// }

// console.log(hack.aniket('fname'))


// const hack = Object.create(person)
// hack.__proto__ = person



const hack = Object.create(null,{
    fname:{
        value:'Hacker'
    }
})