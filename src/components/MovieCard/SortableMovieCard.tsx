import { useSortable } from '@dnd-kit/sortable'
import MovieCard, { MovieCardProps } from './MovieCard'
import { CSS } from '@dnd-kit/utilities'
import styled from 'styled-components'

export default function SortableMovieCard(props: MovieCardProps) {
  const { movie } = props

  const { attributes, listeners, setNodeRef, isDragging, transform, transition } = useSortable({
    id: movie.imdbID,
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || undefined,
  }

  return (
    <Container ref={setNodeRef} {...attributes} {...listeners} $isDragging={isDragging} style={style}>
      <MovieCard {...props} />
    </Container>
  )
}

export const Container = styled.div<{ $isDragging: boolean }>`
  cursor: ${({ $isDragging }) => ($isDragging ? 'grabbing' : 'grab')};
  opacity: ${({ $isDragging }) => ($isDragging ? '0.7' : '1')};
  transform: ${({ $isDragging }) => ($isDragging ? 'scale(1.05)' : 'scale(1)')};
`
