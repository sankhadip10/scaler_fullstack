// console.log(window)

// window.addEventListener('load',function(){
//     console.log('DOM is ready')
   
// })
// window.addEventListener('load',function(){
//     console.log('DOM is ready 2')
   
// })
// window.addEventListener('load',function(){
//     console.log('DOM is ready 3')
   
// })

// const btn = document.getElementById('my-btn')
// btn.addEventListener('click',function(){
//     console.log("Button is clicked")
// })
// btn.addEventListener('click',function(){
//     console.log("Button is clicked")
// })
// btn.addEventListener('click',function(){
//     console.log("Button is clicked")
// })

const input = document.getElementById('todo-input')
const btn = document.getElementById('add-btn')
const todoListContainer = document.getElementById('todo-list-container')

document.addEventListener('keydown',(e)=>{
    if(e.key ==='n' && e.ctrlKey){
        input.focus()
    }else if(e.key ==='Enter'){
        btn.click()
    }else if(e.altKey && !isNaN(e.key)){
        const index = parseInt(e.key)-1
        const items = document.querySelectorAll('#todo-list-container li')
        if(items[index]){
            items[index].remove()
        }
    }
})

btn.addEventListener('click',()=>{
    const value =input.value;
    if (!value) return;

    const li = document.createElement('li')
    const span = document.createElement('span')
    const delBtn = document.createElement('button')

    // delBtn.disabled =true
    // delBtn.addEventListener('keydown',e=>{
    //     if(e.key ==='Shift'){
    //         delBtn.disabled=false
    //     }
    // })

    // delBtn.addEventListener('keydown',e=>{
    //     if(e.key ==='Shift'){
    //         delBtn.disabled=true
    //     }
    // })

    delBtn.addEventListener('click',(e)=>{
        if(e.shiftKey)
            li.remove()
    })
    const valueNode = document.createTextNode(value)
    const deleteTextNode = document.createTextNode('delete')
    // span.innerText = valueNode

    span.appendChild(valueNode)
    // delBtn.innerText='delete'
    delBtn.appendChild(deleteTextNode)

    li.appendChild(span)
    li.appendChild(delBtn)

    todoListContainer.appendChild(li)


    input.value =' '
})

//if ther are multiple and some one come s later the value is overloaded
// window.onload = function(){
//     console.log('Window is loaded!!!!')
// }