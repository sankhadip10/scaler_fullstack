function Pizza(){
    console.log('Starting to create Pizza')

    //
}



function Remote(brandname){
    console.log('Starting to create Remote')
    console.log('Starting to create Remote')
    console.log('Starting to create Remote')

    this.brandname = brandname

    this.tempUp = function(){
        console.log(`${this.brandname} Temp up . . .`)
    }
    this.tempDown = function(){
        console.log(`${this.brandname}Temp down . . .`)
    }
}

const r1 = new Remote('Tata');
r1.tempUp()
r1.tempUp()
r1.tempUp()