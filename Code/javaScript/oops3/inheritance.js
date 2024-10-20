//Parent

//Height -6ft
//Skin Tone 

class Parent{
    constructor({height,skinTone,eyeColor}){
        console.log("Inside parent" )
        this.height = height
        this.skinTone =skinTone
        this.eyeColor =eyeColor;
    }

    test(){}
}


class Child extends Parent{
    constructor(eyeColor,height,skinTone,isMuscular){
        super({eyeColor,height,skinTone})
        this.isMuscular =isMuscular;
    }

    goToGym(){
        console.log('Child is going to Gym')
    }

}


// const c1 = new Child({eyeColor:'Black',height:6,isMuscular:true,skinTone:'Fair'});

// c1.test()
// c1.goToGym()


class Animal{
    constructor(name,type){
        this.name =name
        this.type = type
    }


    walk(){
        console.log(`${this.name} is walking...`)
    }

    eat(){
        console.log(`${this.name} is eating...`)
    }

    sleep(){
        console.log(`${this.name} is sleeping...`)
    }

    speak(){
        console.log(`${this.name} is speaking...`)
    }
}

class Lion extends Animal{
    constructor(name){
        super(name,'wild')
    }


    killAndHunt(){
        console.log(`${this.name} is hunting ...`)
    }

    speak(){
        console.log(`${this.name} is roaring...`)
    }
   
}

class Dog extends Animal{
    constructor(name){
        super(name,'pet')
    }


    pet(){
        console.log(`${this.name} is being pet...`)
    }

    speak(){
        console.log(`${this.name} is barking...`)
    }
}
/**
 * 
 * @param {Animal} animal 
 */
function makeThisSpeak(animal){
    animal.speak()
}

const l1 =new Lion('Sheeru');
const d1 =new Dog('Tommy');

makeThisSpeak(l1)
l1.speak()
d1.speak()
