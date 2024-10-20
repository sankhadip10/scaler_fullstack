const grandParent=document.getElementById('grand-parent')
const parent=document.getElementById('parent')
const child=document.getElementById('child')


grandParent.addEventListener('click',e=>{
    console.log(`Grandparent clicked`,e.currentTarget)
})

parent.addEventListener('click',e=>{
    console.log(`Parent clicked`,e.currentTarget)
})

child.addEventListener('click',e=>{
    // e.stopPropagation();
    console.log(`Child clicked`,e.currentTarget)
})

grandParent.addEventListener('click',e=>{
    console.log(`Grandparent captured`,e.currentTarget)
},true)

parent.addEventListener('click',e=>{
    console.log(`Parent captured`,e.currentTarget)
},true)

child.addEventListener('click',e=>{
    // e.stopPropagation();
    console.log(`Child capytured`,e.currentTarget)
},true)