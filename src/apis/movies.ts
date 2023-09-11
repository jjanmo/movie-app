import useSWR from 'swr'
import { Movie } from '@store/type'
import { API } from '.'

export const getMoviesBySearch = async (keys: string) => {
  const [search, page] = keys.split('-')
  return API.get<MoviesSearchResponse>(`/?apikey=${import.meta.env.VITE_API_KEY}&s=${search}&page=${page}`).then(
    (res) => res.data
  )
}

export const useMoviesBySearch = ({ search, page }: { search: string; page: number }) =>
  useSWR(`${search}-${page}`, getMoviesBySearch)

export interface MoviesSearchResponse {
  Search: Movie[]
  totalResults: string // 실제 값이 string 으로 들어옴(문서상 number)
  Response: 'True' | 'False' // 실제 값이 string 으로 들어옴(문서상 boolean)
}
