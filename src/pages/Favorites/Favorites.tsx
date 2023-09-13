import useFavorites from '@store/favorites/useFavorites'
import Layout from '@components/Layout'
import MovieCard from '@components/MovieCard'
import * as CS from '../common.style'
import * as S from './Favorites.style'
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd'
import { Movie } from '@store/type'

export default function Favorites() {
  const { movies, setMovies } = useFavorites()

  const hasResult = movies.length > 0

  const reorder = (list: Movie[], startIndex: number, endIndex: number) => {
    const result = [...list]
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result

    if (!destination) return
    if (source.droppableId === destination.droppableId && source.index === destination.index) return

    const reordered = reorder(movies, source.index, destination.index)
    setMovies(reordered)
  }

  return (
    <Layout>
      <CS.ContentWrapper>
        <S.Title>내 즐겨찾기</S.Title>

        {hasResult && (
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="favorites-list">
              {(provided) => (
                <CS.Content ref={provided.innerRef} {...provided.droppableProps}>
                  {movies.map((movie, index) => (
                    <Draggable key={movie.imdbID} draggableId={movie.imdbID} index={index}>
                      {(provided) => (
                        <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                          <MovieCard movie={movie} favorite />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </CS.Content>
              )}
            </Droppable>
          </DragDropContext>
        )}

        {!hasResult && <CS.Notice>즐겨찾기한 영화가 없습니다.</CS.Notice>}
      </CS.ContentWrapper>
    </Layout>
  )
}
