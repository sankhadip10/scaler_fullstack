// console.log(window)
// const h1Tags = document.getElementsByTagName('h1')

// for(let i=0;i<h1Tags.length;i++){
//     h1Tags.item(i).innerHTML='I am element' + i
// }

const input1 = document.getElementById('num1')
const input2 = document.getElementById('num2')
const btn = document.getElementById('btn')
const res = document.getElementById('res')

btn.addEventListener('click',function(){
    const num1 = input1.value
    const num2 = input2.value

    const add = parseInt(num1) + parseInt(num2)


    res.innerText = add
})
