//core libraries
import { useEffect, useRef} from "react"

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

    const lastElementRef = useRef(null);

    useEffect(()=>{

        if (loading) return;
        const observer = new IntersectionObserver((entries)=>{
            const el = entries[0];
            if(el && el.isIntersecting){
                // console.log(el.isIntersecting)
                nextPage();
            }
        },
        {
            rootMargin: "100px", // Trigger before the element is fully in view
            threshold: 1.0, // Trigger when 100% of the element is in view
        }
    );

        if (lastElementRef.current) observer.observe(lastElementRef.current);

        return ()=>{
            if (lastElementRef.current) observer.disconnect(lastElementRef.current);
        };
    },[nextPage,loading]);

    return (
        <div className="homepage-container">
            <section className="movies-container">
                <Grid container spacing={2}>
                    {results.map((movie,index) => (
                        <Grid item key={`${movie.id}-${index}`}>
                            <MovieCard
                                context ="homepage"
                                movieId = {movie.id}
                                title={movie.title}
                                description={movie.overview}
                                imageURL={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            />
                        </Grid>
                    ))}
                </Grid>
                {/* <Button disabled={loading} onClick={()=>setPage(page+1)} variant="contained">Load More</Button> */}
                <div 
                    ref={lastElementRef}
                    // disabled={loading} 
                    // onClick={nextPage} 
                    // variant="contained"
                    style={{ height: "1px", marginBottom: "20px" }} // Ensure visibility

                />

            </section>

        </div>
    )
}

export default HomePage