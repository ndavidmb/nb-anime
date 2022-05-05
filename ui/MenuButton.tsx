import Link from 'next/link'

interface Props {
  title: string
  route: string
  children: React.ReactNode
}

export const MenuButton = ({
  title,
  children,
  route,
}: Props) => {
  return (
    <>
      <Link href={route}>
        <a className="flex justify-start items-center gap-2 font-semibold text-indigo-100 hover:text-orange-500 p-1">
          {children}
          {title}
        </a>
      </Link>
      <hr className="mx-2 mb-1 h-px border-none bg-gray-500" />
    </>
  )
}
