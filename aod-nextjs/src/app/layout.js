import { Inter, Josefin_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const josefinSans = Josefin_Sans({ 
  subsets: ['latin'],
  variable: '--font-josefin-sans',
  display: 'swap'
})

export const metadata = {
  title: 'AOD - All Office Design',
  description: 'Mobiliario de oficina de alta calidad',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${josefinSans.variable} font-josefin`}>
        {children}
      </body>
    </html>
  )
} 