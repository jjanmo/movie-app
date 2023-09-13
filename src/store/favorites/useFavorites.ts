import { useRecoilState, useResetRecoilState } from 'recoil'
import { favoritesAtom } from './atom'
import { Movie } from '@store/type'

export default function useFavorites() {
  const [movies, setMovies] = useRecoilState(favoritesAtom)
  const resetMovies = useResetRecoilState(favoritesAtom)

  const toggleMovie = (selectedMovie: Movie) => {
    const findedMovie = movies.find((movie) => movie.imdbID === selectedMovie.imdbID)
    if (findedMovie) {
      const removed = movies.filter((movie) => movie.imdbID !== selectedMovie.imdbID)
      setMovies(removed)
    } else {
      setMovies((prev) => [selectedMovie, ...prev])
    }
  }

  const removeMovie = (id: string) => {
    const removed = movies.filter((movie) => movie.imdbID !== id)
    setMovies(removed)
  }

  const isFavoritedMovie = (id: string) => !!movies.find((movie) => movie.imdbID === id)

  return {
    movies,
    setMovies,
    toggleMovie,
    removeMovie,
    resetMovies,
    isFavoritedMovie,
  }
}
