import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import useFavorites from '@store/favorites/useFavorites'
import { Movie } from '@store/type'
import { colors } from '@styles/theme'
import * as S from './MovieCard.style'
import defaultThumbnail from '/default_image.png'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { createPortal } from 'react-dom'
import Modal from '@components/Modal'

export interface MovieCardProps {
  movie: Movie
  favorite: boolean
}

export default function MovieCard({ movie, favorite }: MovieCardProps) {
  const { imdbID, Title, Year, Type, Poster } = movie

  const [showModal, setShowModal] = useState<boolean>(false)
  const handleToggleModal = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    setShowModal((prev) => !prev)
  }

  const { toggleMovie, removeMovie } = useFavorites()
  const handleToggleMovie = (movie: Movie) => () => {
    toggleMovie(movie)
  }
  const handleRemoveMovie = (id: string) => () => {
    removeMovie(id)
  }

  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <>
      <S.Container>
        <S.TopDim />
        <S.BottomDim />

        <S.FavoritesButton onClick={isHome ? handleToggleMovie(movie) : handleToggleModal}>
          {favorite ? <AiFillStar size={28} color={colors.red02} /> : <AiOutlineStar size={28} color={colors.red02} />}
        </S.FavoritesButton>

        {Poster === 'N/A' && (
          <S.EmptyThumbnail>
            <img src={defaultThumbnail} />
          </S.EmptyThumbnail>
        )}
        {Poster !== 'N/A' && <S.Thumbnail src={Poster} alt="thumbnail" />}

        <S.Info>
          <div className="title">{Title}</div>
          <div className="row">
            <span className="year">{Year}</span>
            <span className="type">{Type}</span>
          </div>
        </S.Info>
      </S.Container>

      {showModal &&
        createPortal(
          <Modal movieTitle={Title} onRemove={handleRemoveMovie(imdbID)} onCancel={handleToggleModal} />,
          document.querySelector('main') as HTMLElement
        )}
    </>
  )
}
