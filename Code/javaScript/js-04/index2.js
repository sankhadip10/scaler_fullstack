let myArr = [2, 3, 4, 56];

function circleArea(radius) {
    return Math.PI * radius * radius;
}
function circleCircumference(radius) {
    return Math.PI * 2 * radius;
}
function diameter(radius) {
    return 2 * radius;
}

function area(myradiusArr, logic) {
    let result = [];
    for (let i = 0; i < myradiusArr.length; i++) {
        result.push(logic(myradiusArr[i]));
    }
    return result;
}

let areaArray = area(myArr, circleArea);
console.log('This is the area array => ', areaArray);

let diameterArray = area(myArr, diameter);
console.log('This is the diameter array => ', diameterArray);

let cc = area(myArr, circleCircumference);
console.log('This is the circumference array => ', cc);
