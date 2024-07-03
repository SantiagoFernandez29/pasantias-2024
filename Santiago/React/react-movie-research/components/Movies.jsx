export function ListOfMovies ({movies}){
    return (
        <ul>
            {
                movies?.map(movie => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.poster} alt={movie.title} />
                    </li>
                ))
            }
        </ul>
    )
}

export function NoMoviesResults ({movies}){
    return(
        <p>
            No se encontraron pelíclas para esa búsqueda
        </p>
    )
}

export function Movies({movies}){
    
  const hasMovies = movies?.length > 0 // Hay películas cuando hay un Search y es un array.

    return(
        hasMovies 
        ? <ListOfMovies movies={movies}/> 
        : <NoMoviesResults/>
    )
}