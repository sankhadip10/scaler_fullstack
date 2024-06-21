let myRadiusArea = [2,3,4,5,8]

function calulateArea(radiusArea){
    let result = []
    for(let i=0;i<radiusArea.length;i++){
        result.push(3.14 * radiusArea[i] * radiusArea[i])

    }
    return result
}

let finalAreas = calulateArea(myRadiusArea)
console.log("This is area array =>",finalAreas)


function calculateCircumference(radiusArea){
    let result = []
    for(let i=0;i<radiusArea.length;i++){
        result.push(2*Math.PI*radiusArea[i])
    }
    return result;
}

let finalCircumferences = calculateCircumference(myRadiusArea)
console.log("This is Circumference array =>",finalCircumferences)

function calculateDiameter(radiusArea){
    let result = []
    for(let i=0;i<radiusArea.length;i++){
        result.push(radiusArea[i]*2)
    }
    return result;
}


let finalDiameters = calculateDiameter(myRadiusArea)
console.log("This is Diameter array =>",finalDiameters)