import { useRecoilState, useResetRecoilState } from 'recoil'
import { keywordAtom } from './atom'

export default function useKeyword() {
  const [keyword, setKeyword] = useRecoilState(keywordAtom)
  const resetKeyword = useResetRecoilState(keywordAtom)

  return {
    keyword,
    setKeyword,
    resetKeyword,
  }
}
