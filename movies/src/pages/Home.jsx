import MovieCard from "../components/MovieCard"
import { useState } from "react"

function Home(){
    const [searchQuery , setSearchQuery] = useState("");
const movies = [
    {id: 1 , title : "jhon whick" , release_date : '2020'},
    {id: 2 , title : "Khiro " , release_date : '2010'}
]

const handleSearch = (e) =>{
    e.preventDefault()  
    alert(searchQuery)
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