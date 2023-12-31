import { Josefin_Sans} from 'next/font/google'
import { Dancing_Script} from 'next/font/google'
import './globals.css'
import Navbar from '@/app/components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'

const inter = Josefin_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'my project',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Header />
        <Navbar />
        <div className='min-h-screen'>
        {children}
        </div>
        <Footer />
        </body>

    </html>
  )
}
