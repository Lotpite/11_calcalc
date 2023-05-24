import Header from '@/components/Header'
import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zdarova Zaebal',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex h-screen sm:flex-row flex-col-reverse sm:items-start justify-between sm:p-20 pb-10 pt-10`}>
        <Header/>
        <main className='sm:w-4/5 w-full sm:h-full h-5/6 p-4'>
          <div className='w-full h-full flex flex-row justify-center neu p-4'>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
