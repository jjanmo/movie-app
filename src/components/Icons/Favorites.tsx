import { colors } from '@styles/theme'

interface Props {
  size?: number
  color?: string
}

export default function Favorites({ size = 50, color = colors.black }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512">
      <path
        id="Layer_2"
        d="m276.58 66.99 44.26 103.44a20.467 20.467 0 0 0 16.97 12.33l112.05 10.13c17.93 1.62 25.17 23.93 11.62 35.78l-84.7 74.05a20.469 20.469 0 0 0-6.48 19.95l25 109.7c4 17.55-14.98 31.34-30.43 22.11l-96.6-57.67a20.435 20.435 0 0 0-20.97 0l-96.6 57.67c-15.45 9.23-34.43-4.56-30.43-22.11l25-109.7c1.67-7.33-.82-15-6.48-19.95l-84.7-74.05c-13.55-11.85-6.3-34.16 11.62-35.78l112.05-10.13c7.49-.68 14.01-5.41 16.97-12.33l44.26-103.44c7.05-16.55 30.51-16.55 37.59 0z"
        fill={color}
      />
    </svg>
  )
}
