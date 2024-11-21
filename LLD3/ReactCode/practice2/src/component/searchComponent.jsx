import { useEffect, useState } from "react";
import {searchResult} from "../api/querrySearch"

const SearchInput=()=>{
    const[input,setInput] = useState('')
    const[result,setResult] = useState([])


    useEffect(()=>{
        if(input){
            const fetchData =async()=>{
                const item = await searchResult(input);
                setResult(item)
            }

            fetchData()

        }else{
            setResult([])
        }

    },[input])

    const handleInputChange=(e)=>{
        setInput(e.target.value)
    }

    return(
        <div>
            <input type="text" placeholder="Enter the text" value={input} onChange={handleInputChange} />
            <div>
                <h2>Resullt:</h2>
                <ul>
                {result.map((value,index)=>(
                    <li key={index}>{value.name}</li>
                ))}
                </ul>

            </div>
        </div>
        

    );
}

export default SearchInput