export interface Movie {
  imdbID: string
  Title: string
  Year: string
  Type: string
  Poster: string
}

/**
 * 즐겨찾기 페이지에서 드래그앤드랍시 기본적으로 id 속성이 존재해야함
 * → 이를 위한 타입
 */
export interface MovieWithId extends Movie {
  id: string
}
