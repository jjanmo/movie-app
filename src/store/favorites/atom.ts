import { atom } from 'recoil'
import { Movie } from '@store/type'
import { localStorageEffect } from '../effect'

export const favoritesAtom = atom<Movie[]>({
  key: '@favorites',
  default: [],
  effects: [localStorageEffect('@favorites')],
})
