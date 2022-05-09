import Image from 'next/image'
import { useState } from 'react'
import { BiCheckDouble } from 'react-icons/bi'
import { BsClockHistory, BsStar } from 'react-icons/bs'
import { FloatMenu } from '../../ui/FloatMenu/FloatMenu'

interface Props {
  episode: {
    id: number
    watched: boolean
  }
}

export const EpisodeRow: React.FC<Props> = ({
  episode,
}) => {
  const [ep, setEp] = useState(episode)
  const openEpisode = () => {
    console.log('open episode')
  }

  const changeWatchedState = () => {
    setEp({ ...ep, watched: !ep.watched })
  }

  return (
    <li
      className={` hover:cursor-pointer hover:bg-indigo-100 p-4 text-gray-700 flex justify-between border-b ${
        ep.watched ? 'bg-indigo-50' : ''
      }`}
    >
      <section className="flex gap-4" onClick={openEpisode}>
        <Image
          src="https://universo-nintendo.com.mx/my_uploads/2021/04/Universo-Nintendo-Go-Toubun-no-Hanayome-Anuncio-Pelicula.jpg"
          className="object-cover rounded"
          height={100}
          width={120}
        />
        <ul>
          <li className="font-semibold">
            Gotoubun No Hanayome
          </li>
          <li>Episodio {ep.id}</li>
          {ep.watched && (
            <li className="flex items-center font-semibold text-indigo-500">
              Visto <BiCheckDouble />
            </li>
          )}
        </ul>
      </section>

      <FloatMenu>
        <li
          onClick={changeWatchedState}
          className="flex items-center gap-2 px-2 py-1 w-32 text-left hover:bg-gray-100"
        >
          <BiCheckDouble />{' '}
          {ep.watched ? 'No visto' : 'Visto'}
        </li>
        <li className="flex items-center gap-2 px-2 py-1 w-32 text-left hover:bg-gray-100">
          <BsClockHistory />
          Pendientes
        </li>
        <li className="flex items-center gap-2 px-2 py-1 w-32 text-left hover:bg-gray-100">
          <BsStar />
          Calificar
        </li>
      </FloatMenu>
    </li>
  )
}
