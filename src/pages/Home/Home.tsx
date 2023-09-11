import { useCallback, useEffect, useState } from 'react'
import useIntersection from '@hooks/useIntersection'
import useInfiniteMovies from '@hooks/useInfiniteMovies'
import useKeyword from '@store/search/useKeyword'
import Layout from '@components/Layout'
import SearchBar from '@components/SearchBar'
import MovieCard from '@components/MovieCard'
import Spinner from '@components/Icons/Spinner'
import * as S from './Home.style'

export default function Home() {
  const { keyword } = useKeyword()
  const { movies, setPage, moviesStatus, isLoading } = useInfiniteMovies(keyword)
  const [shouldLoadMore, setShouldLoadMore] = useState<boolean>(false)

  const onIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const { isEnd } = moviesStatus
        const isEmpty = movies && movies.length === 0

        if (entry.isIntersecting && !isEnd && !isEmpty) {
          setShouldLoadMore(true)
        } else {
          setShouldLoadMore(false)
        }
      })
    },
    [movies, moviesStatus]
  )
  const { target } = useIntersection<HTMLDivElement>({ onIntersection })

  useEffect(() => {
    if (shouldLoadMore) {
      setPage((prev) => prev + 1)
    }
  }, [setPage, shouldLoadMore])

  const isInitial = !isLoading && !movies
  const hasResult = !isLoading && movies
  const isEmpty = movies && movies.length === 0

  return (
    <Layout>
      <SearchBar />

      <S.ContentWrapper>
        {isInitial && (
          <S.Notice>
            상단의 검색창에서 영화를
            <br /> 검색할 수 있습니다.
          </S.Notice>
        )}

        {isLoading && (
          <S.InitialLoader>
            <Spinner size={100} />
          </S.InitialLoader>
        )}

        {hasResult && (
          <>
            {keyword && <S.Keyword>검색키워드 : {keyword}</S.Keyword>}
            {isEmpty && <S.Notice>검색 결과가 없습니다</S.Notice>}

            {!isEmpty && (
              <>
                <S.Content>
                  {movies.map((movie) => (
                    <MovieCard key={movie.imdbID} {...movie} favorite={false} />
                  ))}
                  <div ref={target}></div>
                </S.Content>

                {shouldLoadMore && (
                  <S.MoreLoader>
                    <Spinner size={50} />
                  </S.MoreLoader>
                )}
              </>
            )}
          </>
        )}
      </S.ContentWrapper>
    </Layout>
  )
}
