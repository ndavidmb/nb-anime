import type { NextPage } from 'next'
import Head from 'next/head'
import { VideosContainer } from '../components/HomePage/VideosContainer'
import { Navbar } from '../components/shared/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NBAnime</title>
        <meta name="description" content="Ver anime en hd" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <VideosContainer />

      <footer>Anime Online</footer>
    </div>
  )
}

export default Home
