import { useEffect, useState } from 'react'
import type { Movie } from '@store/type'
import Layout from '@components/Layout'
import SearchBar from '@components/SearchBar'
import MovieCard from '@components/MovieCard'
import * as S from './Home.style'

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    const getMovies = async () => {
      const { Search } = await import('../../dummy.json')

      setMovies(Search)
    }

    getMovies()
  }, [])

  return (
    <Layout>
      <SearchBar onSubmit={() => {}} />
      <S.ContentWrapper>
        <S.Content>
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} {...movie} favorite={false} />
          ))}
        </S.Content>
        <div></div>
      </S.ContentWrapper>
    </Layout>
  )
}
