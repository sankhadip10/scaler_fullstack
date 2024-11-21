import { useEffect, useState } from "react";
import {fetchSearchResults} from "../api/searchApi"

const SearchInput =()=>{

    const [inputValue,setInputValue]=useState('')
    const [results,setResults]=useState([])
    

    useEffect(()=>{
        if(inputValue){
            const fetchData = async()=>{
                const item = await fetchSearchResults(inputValue)
                setResults(item)

            }
            fetchData()
        }else{
            setResults([])
        }

    },[inputValue])


    const handleInputChange=(e)=>{
        setInputValue(e.target.value);
    }
    return(
        <div>
            <input type="text" placeholder="Type to search" value={inputValue} onChange={handleInputChange} />
            <div>
                <h2>Results:</h2>
                <ul>
                    {results.map((item,index)=>(
                        <li key={index}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </div>

    );
};

export default SearchInput