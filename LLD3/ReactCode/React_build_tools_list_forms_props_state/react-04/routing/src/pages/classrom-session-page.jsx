import { useParams } from "react-router-dom"

const ClassRoom= () =>{
    const {classId} = useParams()

    // console.log({value})
    return(
        <div>
            <h1>ClassRoom page for {classId}</h1>
        </div>
    )
}

export default ClassRoom