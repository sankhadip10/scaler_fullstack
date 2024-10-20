const items = document.querySelectorAll('.item')
const boards = document.querySelectorAll('.board')


items.forEach(item=>{
    item.addEventListener('dragstart',e=>{
        item.classList.add('is-dragging')
    })
    item.addEventListener('dragged',e=>{
        item.classList.remove('is-dragging')
    })
    
})

boards.forEach(board=>{
    board.addEventListener('dragover',()=>{
        // console.log('Something is dragged over',board)
        const taskEl = document.querySelector('.is-dragging')

        //Tode:First find the closest el in the current board
        //2.If found,add before the closest element
        //3.Just normal append

        const closestElement = getClosestElement()
        if(closestElement){

        }else{
            board.appendChild(taskEl)
        }
    })
})

function closestElement(){
    
}