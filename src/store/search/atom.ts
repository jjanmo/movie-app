import { atom } from 'recoil'

export const keywordAtom = atom<string>({
  key: '@searchKeyword',
  default: '',
})
