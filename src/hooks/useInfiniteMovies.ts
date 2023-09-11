import { useMemo, useState } from 'react'
import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite'
import { getMoviesBySearch } from '@apis/movies'
import { Movie } from '@store/type'

const ITEMS_PER_PAGE = 10

interface MoviesStatus {
  total: number
  isEnd: boolean
}

export default function useInfiniteMovies(search: string) {
  const [moviesStatus, setMoviesStatus] = useState<MoviesStatus>({ total: -1, isEnd: false })
  const getKey: SWRInfiniteKeyLoader = (pageIndex: number) => {
    if (!search) return null
    if (moviesStatus.total >= 0 && pageIndex * ITEMS_PER_PAGE > moviesStatus.total) return null

    return `${search}-${pageIndex + 1}`
  }

  const { data, isLoading, isValidating, setSize, size, error } = useSWRInfinite(getKey, getMoviesBySearch, {
    revalidateFirstPage: false,
  })

  const movies = useMemo(() => {
    if (data) {
      const movies = data
        .filter((item) => item.Response === 'True') //
        .reduce((acc, cur) => acc.concat(cur.Search), [] as Movie[])

      setMoviesStatus({
        total: movies.length,
        isEnd: movies.length === Number(data[0].totalResults),
      })

      return movies
    }
  }, [data])

  return {
    movies,
    moviesStatus,
    isLoading,
    isValidating,
    setPage: setSize,
    currentPage: size,
    error,
  }
}
