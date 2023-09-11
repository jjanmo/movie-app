import * as S from './Modal.style'

interface Props {
  movieTitle: string
  onRemove: () => void
  onCancel: (e: React.MouseEvent<HTMLElement>) => void
}

export default function Modal({ movieTitle, onRemove, onCancel }: Props) {
  return (
    <S.Container onClick={onCancel}>
      <S.Content>
        <S.Title>
          영화 ( <span className="movieTitle">{movieTitle}</span> ) 를 즐겨찾기에서 제거하시겠습니까?
        </S.Title>

        <S.ButtonContainer>
          <S.CancelButton onClick={onCancel}>취소</S.CancelButton>
          <S.RemoveButton onClick={onRemove}>제거</S.RemoveButton>
        </S.ButtonContainer>
      </S.Content>
    </S.Container>
  )
}
