// console.log("Hey")
const data = fetch('https://sonplaceholder.typicode.com/')
// console.log(data)

//chainin Functions
data.then(noice).catch(ooh).finally(nevermind)

//.then,.cath,.finally =>Promises

function noice(){
    console.log('Wohoo!')

}

function ooh(){
    console.log("Oho")
}

function nevermind(){
    console.log('Inside Finally!')
}