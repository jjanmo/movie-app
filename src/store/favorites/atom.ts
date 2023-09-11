import { atom } from 'recoil'
import { Movie } from '@store/type'

export const favoritesAtom = atom<Movie[]>({
  key: '@favorites',
  default: [],
})
