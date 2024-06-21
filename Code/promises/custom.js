const customPromise = new Promise(function(resolve,reject){
    console.log("I am doing some million dollar work inside promise")
    // resolve('Cool Bro!Nice work!!')
    reject('Bcz I dont want to do this work')
})


async function doTasks(){
    const result = await customPromise;
    console.log(result)
}

// customPromise
// .then((data)=>console.log("Promise Resolved",data))
// .catch((data)=>console.log("Promise Rejected",data))
// .finally(()=>console.log("Promise Finally"))