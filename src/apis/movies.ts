import useSWR from 'swr'
import { AxiosResponse } from 'axios'
import { API } from '.'

export const getMoviesBySearch = async (keys: string) => {
  const [search, page] = keys.split('-')
  return API.get<AxiosResponse<MoviesSearchResponse>>(
    `/?apikey=${import.meta.env.VITE_API_KEY}&s=${search}&page=${page}`
  ).then((res) => res.data)
}

export const useMoviesBySearch = ({ search, page }: { search: string; page: number }) =>
  useSWR(`${search}-${page}`, getMoviesBySearch)

interface Movie {
  imdbID: string
  Title: string
  Year: string
  Type: string
  Poster: string
}

interface MoviesSearchResponse {
  Search: Movie[]
  totalResults: number
  Response: boolean
}
