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
  totalResults: string
  Response: boolean
}
