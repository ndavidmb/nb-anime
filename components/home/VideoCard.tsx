import Image from 'next/image'
import { useRouter } from 'next/router'
import { Card } from '../../ui/Card'
import { Chip } from '../../ui/Chip'

interface Props {
  id: number
}

export const VideoCard: React.FC<Props> = ({ id }) => {
  const router = useRouter()
  const redirectToAnimePage = () => {
    router.push(`./list/${id}`, undefined, {
      shallow: true,
    })
  }

  return (
    <Card
      extraClasses="hover:cursor-pointer w-52 h-72 card"
      handleClick={() => redirectToAnimePage()}
    >
      <figure className="p-1">
        <Image
          src="https://pics.filmaffinity.com/gotobun_no_hanayome-504431334-large.jpg"
          className="rounded-md object-cover"
          alt="Img Anime"
          width={500}
          height={500}
        />
        <figcaption className="font-semibold">
          Gotoubun no Hanayome
          <div className="flex gap-1 mt-1">
            <Chip text="Ecchi" />
            <Chip text="Romance" />
            <Chip text="Whatever" />
          </div>
        </figcaption>
      </figure>
    </Card>
  )
}
