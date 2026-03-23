import MovieCard from "../components/movieCard"
import {useState} from "react"
import {searchMovies,getPopularMovies} from "../services/api"
function Home(){
    const [searchQuerry,setSearchQuerry] =useState("")
    const movies =[
        {id:1,title:"John Wick", release_date: "2010" },
        {id:2,title:"Terminator", release_date: "2000" },
        {id:3,title:"Matrix", release_date: "2021" }
    ];

   const handleSearch = (e) =>{
      e.preventDefault()
      alert(searchQuerry)
      setSearchQuerry("")
   };
   return (<div classNmae = "home"> 
       <form onSubmit ={handleSearch} className = "search-form">
          <input type = "text" 
          placeholder = "Search for Movies..." 
          className ="search-input" 
          value ={searchQuerry}
          onChange = {(e) => setSearchQuerry(e.target.value)}
          ></input>
          <button type = "submit" className = "Search-button">Search</button>
       </form>
       <div className = "movies-grid">
        {movies.map((movie) =>(
            //movie.title.toLowerCase().startsWith(searchQuerry) && 
            <MovieCard movie = {movie} key = {movie.id}/>))}
        </div> 
   </div>); 
}
export default Home