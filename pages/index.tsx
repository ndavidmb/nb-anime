import type { NextPage } from 'next'
import Head from 'next/head'
import { AsideMenu } from '../components/AsideMenu'
import { VideosContainer } from '../components/HomePage'

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

      <section className="flex w-full bg-gray-100 h-screen">
        <AsideMenu />
        <div className="overflow-auto p-5 w-3/4">
          <VideosContainer />
        </div>
      </section>
    </>
  )
}

export default Home
