import { useEffect, useState } from 'react'
import type { Movie } from '@store/type'
import Layout from '@components/Layout'
import SearchBar from '@components/SearchBar'
import * as S from './Home.style'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { colors } from '@styles/theme'

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([])
  const test = true

  useEffect(() => {
    const getMovies = async () => {
      const { Search } = await import('../../../public/dummy.json')

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
            <S.Movie key={movie.imdbID}>
              <S.FavoritesButton>
                {test ? (
                  <AiFillStar size={28} color={colors.red02} />
                ) : (
                  <AiOutlineStar size={28} color={colors.red02} />
                )}
              </S.FavoritesButton>
              <S.Thumbnail src={movie.Poster} alt="thumbnail" />
              <S.Info>
                <span className="title">{movie.Title}</span>
                <span className="year">{movie.Year}</span>
                <span className="type">{movie.Type}</span>
              </S.Info>
            </S.Movie>
          ))}
        </S.Content>
        <div></div>
      </S.ContentWrapper>
    </Layout>
  )
}
