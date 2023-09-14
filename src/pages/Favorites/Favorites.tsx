import { DndContext, DragEndEvent, MouseSensor, useSensor, useSensors } from '@dnd-kit/core'
import { SortableContext, arrayMove } from '@dnd-kit/sortable'
import useFavorites from '@store/favorites/useFavorites'
import Layout from '@components/Layout'
import { SortableMovieCard } from '@components/MovieCard'
import * as CS from '../common.style'
import * as S from './Favorites.style'

export default function Favorites() {
  const { movies, setMovies } = useFavorites()

  const hasResult = movies.length > 0

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (!over) return
    if (active.id !== over?.id) {
      const oldIndex = movies.findIndex((movie) => movie.id === active.id)
      const newIndex = movies.findIndex((movie) => movie.id === over.id)

      const reordered = arrayMove(movies, oldIndex, newIndex)
      setMovies(reordered)
    }
  }

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  })
  const sensors = useSensors(mouseSensor)

  return (
    <Layout>
      <CS.ContentWrapper>
        <S.Title>내 즐겨찾기</S.Title>

        {hasResult && (
          <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
            <SortableContext items={movies}>
              <CS.Content>
                {movies.map((movie) => (
                  <SortableMovieCard key={movie.id} movie={movie} favorite />
                ))}
              </CS.Content>
            </SortableContext>
          </DndContext>
        )}

        {!hasResult && <CS.Notice>즐겨찾기한 영화가 없습니다.</CS.Notice>}
      </CS.ContentWrapper>
    </Layout>
  )
}
