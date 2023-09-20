import localFont from 'next/font/local'

export const satoshi = localFont({
  src: [
    {
      path: './satoshi/Satoshi-Variable.woff2',
      style: 'normal',
    },
    {
      path: './satoshi/Satoshi-VariableItalic.woff2',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-helvetica-neue',
})
