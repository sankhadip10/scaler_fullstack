const city =document.getElementById('city')
const region =document.getElementById('region')
const country =document.getElementById('country')
const temp =document.getElementById('temp')
const humidity =document.getElementById('humidity')


const searchInput = document.getElementById('search-input')
const searchBtn = document.getElementById('search-btn')

searchBtn.addEventListener('click',async ()=>{
    const value = searchInput.value;
    const response = await searchWeatherDate(value)

    const city =response.location.name
    const region =response.location.region
    const country =response.location.country
    const temp =response.current.temp_c
    const humidity =response.current.humidity
    
    updateDom({city,region,country,temp,humidity})
})

function requestCurrentLocation(){
    return new Promise((resolve,reject)=>{
        window.navigator.geolocation.getCurrentPosition(
            ({coords})=>{
                const latitude =coords.latitude;
                const longitude = coords.longitude;
                resolve({lat:latitude,long:longitude})
            },
            (message)=>{
                reject(message)
            }
        )

    })

}

async function getWeatherDateByLocation(lat,long){
    const url=`http://api.weatherapi.com/v1/current.json?key=12b3d12a119c496a83890723241609&q=${lat},${long}`
    const response = await fetch(url)

    const result = await response.json()
    return result
}

async function searchWeatherDate(search){
    const url=`http://api.weatherapi.com/v1/current.json?key=12b3d12a119c496a83890723241609&q=${search}`
    const response = await fetch(url)

    const result = await response.json()
    return result
}

function updateDom(data){
    city.innerText = data.city
    region.innerText = data.region
    country.innerText = data.country
    temp.innerText = data.temp
    humidity.innerText = data.humidity
}

window.addEventListener('load',()=>{
    requestCurrentLocation()
    .then(({lat,long})=>getWeatherDateByLocation(lat,long))
    .then(response=>{
        const city =response.location.name
        const region =response.location.region
        const country =response.location.country
        const temp =response.current.temp_c
        const humidity =response.current.humidity
        updateDom({city,region,country,temp,humidity})
    })
    //     {
    //     console.log(`lat:${latitude},long:${longitude}`)
    // })
    .catch(err=>console.log(err))
})