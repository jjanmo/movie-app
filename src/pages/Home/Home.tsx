import { useCallback, useEffect, useState } from 'react'
import useIntersection from '@hooks/useIntersection'
import useInfiniteMovies from '@hooks/useInfiniteMovies'
import Layout from '@components/Layout'
import SearchBar from '@components/SearchBar'
import MovieCard from '@components/MovieCard'
import Spinner from '@components/Icons/Spinner'
import * as S from './Home.style'

export default function Home() {
  const [value, setValue] = useState<string>('')
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setValue(value)
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // 콜 다시 시작!
  }

  const [shouldLoadMore, setShouldLoadMore] = useState<boolean>(false)
  const { movies, setPage, moviesStatus } = useInfiniteMovies(value)
  const onIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const { isEnd } = moviesStatus
        if (entry.isIntersecting && !isEnd) {
          setShouldLoadMore(true)
        } else {
          setShouldLoadMore(false)
        }
      })
    },
    [moviesStatus]
  )
  const { target } = useIntersection<HTMLDivElement>({ onIntersection })

  useEffect(() => {
    if (shouldLoadMore) {
      setPage((prev) => prev + 1)
    }
  }, [setPage, shouldLoadMore])

  return (
    <Layout>
      <SearchBar onSubmit={onSubmit} onChange={onChange} value={value} />
      <S.ContentWrapper>
        {movies && (
          <>
            <S.Content>
              {movies.map((movie) => (
                <MovieCard key={movie.imdbID} {...movie} favorite={false} />
              ))}
              <div ref={target}></div>
            </S.Content>

            {shouldLoadMore && (
              <S.SpinnerWrapper>
                <Spinner size={50} />
              </S.SpinnerWrapper>
            )}
          </>
        )}

        {!movies && (
          <S.Content>
            <div style={{ color: 'white' }}>검색 결과가 없습니다</div>
          </S.Content>
        )}
      </S.ContentWrapper>
    </Layout>
  )
}
