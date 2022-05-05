import Image from 'next/image'
import { useRouter } from 'next/router'
import { Chip } from '../ui/Chip'
export const VideoCard = () => {
  const router = useRouter()
  const redirectToAnimePage = () => {
    router.push('./page', undefined, { shallow: true })
  }

  return (
    <div
      onClick={() => redirectToAnimePage()}
      className="hover:cursor-pointer card bg-white shadow-md p-2 rounded-sm w-52 h-72"
    >
      <figure className="p-1">
        <Image
          src="https://pics.filmaffinity.com/gotobun_no_hanayome-504431334-large.jpg"
          className="rounded-md"
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
    </div>
  )
}
