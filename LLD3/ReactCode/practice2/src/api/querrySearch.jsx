import axios from 'axios'


export const searchResult = async(query)=>{
    try {
        const response =  await axios.get(`https://demo.dataverse.org/api/search?q=${query}`)
        console.log(response)
        return response.data.data.items
    } catch (error) {
        console.log("Error occurred",error)
        return []
        
    }
    
}