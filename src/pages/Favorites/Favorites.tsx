import useFavorites from '@store/favorites/useFavorites'
import Layout from '@components/Layout'
import MovieCard from '@components/MovieCard'
import * as CS from '../common.style'
import * as S from './Favorites.style'

export default function Favorites() {
  const { movies } = useFavorites()

  const hasResult = movies.length > 0

  return (
    <Layout>
      <CS.ContentWrapper>
        <S.Title>내 즐겨찾기</S.Title>

        {hasResult && (
          <CS.Content>
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} favorite />
            ))}
          </CS.Content>
        )}

        {!hasResult && <CS.Notice>즐겨찾기한 영화가 없습니다.</CS.Notice>}
      </CS.ContentWrapper>
    </Layout>
  )
}
