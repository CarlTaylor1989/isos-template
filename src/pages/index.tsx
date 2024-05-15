import Head from 'next/head'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home app - port :3000</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <Nav>Navigation component from home app</Nav>
        <div>Home app hosted on port :3000</div>
        <Footer />
      </main>
    </>
  )
}
