export const Navbar = () => {
  return (
    <nav className="flex w-screen bg-purple-600 gap-2 p-4 items-center justify-between">
      <h1 className="text-yellow-50 font-bold text-xl">NBAnime</h1>
      <ul className="flex gap-2">
        <li>Página de inicio</li>
        <li>Categorías</li>
      </ul>
    </nav>
  )
}
