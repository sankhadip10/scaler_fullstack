//core libraries
// import { useEffect, useState } from "react"

//Third Party
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"

import MovieCard from "../../components/movie-card"

//utility
// import { moveAPIInstance } from "../../api"

import './style.css'
import useMovies from "../../hooks/use-movies"

const HomePage = () => {

    // const [results, setResults] = useState([])
    // const [page, setPage] = useState(1)
    // const [loading, setLoading] = useState(false)


    // useEffect(() => {
    //     setLoading(true)

    //     moveAPIInstance
    //     .get(`/discover/movie?page=${page}`)
    //     .then((response) => setResults((prev)=>[...prev,...response.data.results]))
    //     .finally(()=>setLoading(false))
    // }, [page])

    // console.log({ results })

    const {loading,results,nextPage} = useMovies()

    return (
        <div className="homepage-container">
            <section className="movies-container">
                <Grid container spacing={2}>
                    {results.map((movie,index) => (
                        <Grid item key={`${movie.id}-${index}`}>
                            <MovieCard title={movie.title}
                                imageURL={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            />
                        </Grid>
                    ))}
                </Grid>
                {/* <Button disabled={loading} onClick={()=>setPage(page+1)} variant="contained">Load More</Button> */}
                <Button disabled={loading} onClick={nextPage} variant="contained">Load More</Button>

            </section>

        </div>
    )
}

export default HomePage