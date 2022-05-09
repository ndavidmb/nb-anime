import { AsideMenu } from './AsideMenu'

interface Props {
  extraClasses?: string
}

export const Container: React.FC<Props> = ({
  children,
  extraClasses,
}) => {
  return (
    <section className="flex w-full bg-gray-100 h-screen">
      <AsideMenu />

      <div
        className={`overflow-auto p-5 w-3/4 ${
          extraClasses ? extraClasses : ''
        }`}
      >
        {children}
      </div>
    </section>
  )
}
