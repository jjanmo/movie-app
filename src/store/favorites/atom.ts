import { atom } from 'recoil'
import { MovieWithId } from '@store/type'
import { localStorageEffect } from '../effect'

export const favoritesAtom = atom<MovieWithId[]>({
  key: '@favorites',
  default: [],
  effects: [localStorageEffect('@favorites')],
})
