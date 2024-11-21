import axios from 'axios'
export const fetchSearchResults= async(query)=>{
    try {
        const response=await axios.get(`https://demo.dataverse.org/api/search?q=${query}`)

        console.log(response.data)
        return response.data.data.items
        
    } catch (error) {
        console.log("Error fetching search result",error)
        return [];
        
    }
};