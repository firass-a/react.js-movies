import MovieCard from "../components/MovieCard"
import { useEffect, useState } from "react"
import "../css/Home.css"
import { searchMovies , getPopularMovies } from "../services/api";  

function Home(){
    const [searchQuery , setSearchQuery] = useState("");
    const [movies , setPopularMovies] = useState([])


    useEffect(() => {
        const fetchMovies = async ()=>{
            const popularMovies = await getPopularMovies();
            setPopularMovies(popularMovies);
        }

        fetchMovies();
    } , [  ]);


const handleSearch = async (e) =>{
    e.preventDefault()  
    if (searchQuery.trim() === "") {
        return;
    }
    const searchResults = await searchMovies(searchQuery);

};

return ( 
<div className="home"> 

    <form onSubmit={handleSearch} className="search-form">
        <input
         type="text"
         placeholder="Search for movies"
         className="search-input"
         value={searchQuery}
         onChange={(e) => setSearchQuery(e.target.value)} 
        />
        <button className="search-button" type="submit">
            Search
        </button>
    </form>
    <div className="movies-grid">
        {
            movies.map((movie)=>(
              movie.title.toLocaleLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id}/>
            ))
        }
    </div>
</div>
)
}

export default Home