import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Movie } from '@store/type'
import { colors } from '@styles/theme'
import * as S from './MovieCard.style'
import defaultThumbnail from '/default_image.png'

interface Props extends Movie {
  favorite: boolean
}

export default function MovieCard(props: Props) {
  const { imdbID, Title: title, Year: year, Type: type, Poster: poster, favorite } = props

  const handleClick = () => {
    // TODO
    // 해당 영화를 로컬스토리지에 추가 / 삭제
  }

  return (
    <S.Container key={imdbID}>
      <S.TopDim />
      <S.BottomDim />

      <S.FavoritesButton onClick={handleClick}>
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
