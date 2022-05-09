import type { NextPage } from 'next'
import Head from 'next/head'
import { EpisodeHeader } from '../../components/episodes/EpisodeHeader'
import { EpisodeRow } from '../../components/episodes/EpisodeRow'
import { Card } from '../../ui/Card'
import { Container } from '../../ui/Container'

export const ListChapters: NextPage = () => {
  const mockList = [
    {
      id: 1,
      watched: true,
    },
    {
      id: 2,
      watched: false,
    },
    {
      id: 3,
      watched: false,
    },
    {
      id: 4,
      watched: false,
    },
    {
      id: 5,
      watched: false,
    },
    {
      id: 6,
      watched: false,
    },
  ]

  return (
    <>
      <Head>
        <title>Lista de episodios</title>
      </Head>
      <Container extraClasses="flex flex-col gap-3">
        <EpisodeHeader />

        <Card>
          <ul>
            {mockList.map((element) => (
              <EpisodeRow episode={element} />
            ))}
          </ul>
        </Card>
      </Container>
    </>
  )
}

export default ListChapters
