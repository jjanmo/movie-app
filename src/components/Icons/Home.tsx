import { colors } from '@styles/theme'

interface Props {
  size?: number
  color?: string
  strokeWidth?: number
}

export default function Home({ size = 50, color = colors.black, strokeWidth = 1 }: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 24 24">
      <path
        fill={color}
        stroke={color}
        strokeWidth={strokeWidth}
        fillRule="evenodd"
        d="M21.45 10.275 12 3.187l-9.45 7.088.45 1.35h.75v8.625h16.5v-8.625H21l.45-1.35ZM5.25 18.75v-8.625L12 5.062l6.75 5.063v8.625H15v-4.417l-.75-.75h-4.5l-.75.75v4.417H5.25Zm5.25 0h3v-3.667h-3v3.667Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
