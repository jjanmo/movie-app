import { useRecoilState, useResetRecoilState } from 'recoil'
import { favoritesAtom } from './atom'
import { Movie } from '@store/type'

export default function useFavorites() {
  const [movies, setMovies] = useRecoilState(favoritesAtom)
  const resetMovies = useResetRecoilState(favoritesAtom)

  // movies가 변경될때마다 로컬스토리지도 변경해줌!
  // 초기에 로컬스토리지에서 값이 있는지 확인하고 있으면 가져옴
  //

  const toggleMovie = (selectedMovie: Movie) => {
    const findedMovie = movies.find((movie) => movie.imdbID === selectedMovie.imdbID)
    if (findedMovie) {
      const removed = movies.filter((movie) => movie.imdbID !== selectedMovie.imdbID)
      setMovies(removed)
    } else {
      setMovies((prev) => [...prev, selectedMovie])
    }
  }

  const isFavoritedMovie = (id: string) => !!movies.find((movie) => movie.imdbID === id)

  return {
    movies,
    toggleMovie,
    resetMovies,
    isFavoritedMovie,
  }
}
