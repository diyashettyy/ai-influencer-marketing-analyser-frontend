import { ImageResponse } from 'next/og'

export const size = {
  width: 64,
  height: 64,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: 'transparent',
        }}
      >
        <svg
          viewBox="0 0 150 95"
          width="76"
          height="76"
          fill="none"
          stroke="#2d2d2d"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M 56 28 C 63 16, 76 16, 83 26 C 90 16, 103 17, 108 30 C 120 28, 129 37, 128 48 C 136 52, 136 63, 128 68 C 129 82, 120 90, 108 87 C 100 92, 89 91, 83 86 C 76 90, 66 90, 58 84 C 48 85, 40 80, 40 72 C 33 67, 33 56, 41 50 C 40 40, 46 31, 56 28 Z" fill="#fffdf5" />
          <path d="M 52 41 C 47 34, 38 33, 33 38 C 28 43, 28 53, 33 59 C 38 64, 46 64, 52 57" fill="#fffdf5" />
          <path d="M 30 28 C 33 21, 42 20, 47 24 C 51 18, 60 20, 63 27 C 68 28, 70 35, 66 40 C 63 44, 57 45, 52 41 C 47 45, 39 44, 35 39 C 31 39, 29 33, 30 28 Z" fill="#fffdf5" />
          <path d="M 31 39 L 16 34 L 31 31" fill="#fffdf5" />
          <path d="M 60 39 L 75 34 L 60 31" fill="#fffdf5" />
          <path d="M 64 72 L 73 72 L 72 95 C 72 99, 65 99, 65 95 Z" fill="#fffdf5" />
          <path d="M 100 72 L 109 72 L 108 95 C 108 99, 101 99, 101 95 Z" fill="#fffdf5" />
        </svg>
      </div>
    ),
    size,
  )
}