import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import useFavorites from '@store/favorites/useFavorites'
import { Movie } from '@store/type'
import { colors } from '@styles/theme'
import * as S from './MovieCard.style'
import defaultThumbnail from '/default_image.png'

interface Props extends Movie {
  favorite: boolean
}

export default function MovieCard(props: Props) {
  const { imdbID, Title: title, Year: year, Type: type, Poster: poster, favorite } = props
  const { toggleMovie } = useFavorites()

  const handleClick = (movie: Movie) => () => {
    toggleMovie(movie)
  }

  return (
    <S.Container key={imdbID}>
      <S.TopDim />
      <S.BottomDim />

      <S.FavoritesButton onClick={handleClick(props)}>
        {favorite ? <AiFillStar size={28} color={colors.red02} /> : <AiOutlineStar size={28} color={colors.red02} />}
      </S.FavoritesButton>

      {poster === 'N/A' && (
        <S.EmptyThumbnail>
          <img src={defaultThumbnail} />
        </S.EmptyThumbnail>
      )}
      {poster !== 'N/A' && <S.Thumbnail src={poster} alt="thumbnail" />}

      <S.Info>
        <div className="title">{title}</div>
        <div className="row">
          <span className="year">{year}</span>
          <span className="type">{type}</span>
        </div>
      </S.Info>
    </S.Container>
  )
}
