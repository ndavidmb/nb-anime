import type { NextPage } from 'next'
import Head from 'next/head'
import { VideosContainer } from '../components/home/VideosContainer/VideosContainer'
import { Container } from '../ui/Container'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>DMAnime</title>
        <meta
          name="description"
          content="Ver anime en hd"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <VideosContainer />
      </Container>
    </>
  )
}

export default Home
