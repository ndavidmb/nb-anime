import { BiLibrary, BiLogIn } from 'react-icons/bi'
import {
  BsBookmarkStar,
  BsClockHistory,
  BsFillCollectionPlayFill,
  BsHeartFill,
  BsHouseFill
} from 'react-icons/bs'
import { MenuButton } from '../ui/MenuButton'

export const AsideMenu = () => {
  return (
    <aside className="w-1/4 bg-gradient-to-r from-gray-900 to-indigo-900 shadow-md flex gap-2 flex-col p-4">
      <h1 className="text-2xl font-bold text-white">
        <span className="text-orange-500">DM</span>
        Anime
      </h1>

      <form className="pb-2">
        <input
          className="border p-2 rounded-md w-full"
          placeholder="Buscar..."
        />
      </form>

      <article className="flex flex-col gap-1">
        <MenuButton title="Página de inicio" route="/">
          <BsHouseFill />
        </MenuButton>
        <MenuButton title="Directorio" route="/directory">
          <BiLibrary />
        </MenuButton>
        <MenuButton title="Ingresar" route="/login">
          <BiLogIn />
        </MenuButton>
        <MenuButton title="Favoritos" route="/favorites">
          <BsHeartFill />
        </MenuButton>
        <MenuButton title="Seguir viendo" route="/continue-watching">
          <BsFillCollectionPlayFill />
        </MenuButton>
        <MenuButton title="Pendientes" route="/pendents">
          <BsClockHistory />
        </MenuButton>
        <MenuButton title="Recomendados" route="/recommends">
          <BsBookmarkStar />
        </MenuButton>
      </article>
    </aside>
  )
}
