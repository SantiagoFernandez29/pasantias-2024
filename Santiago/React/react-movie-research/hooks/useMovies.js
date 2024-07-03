import responsiveMovies from '../mocks/with-results.json'
import withoutResults from '../mocks/no.results.json'

export function useMovies(){
    const movies = responsiveMovies.Search // Almacena las películas guardadas en un array Search.
  
    const mappedMovies = movies?.map(movie =>({
      id:movie.imdbID,
      title:movie.Title,
      year:movie.Year,
      poster:movie.Poster
    }))
  
    return {movies:mappedMovies}
}