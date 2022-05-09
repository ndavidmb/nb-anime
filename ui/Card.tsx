interface Props {
  extraClasses?: string
  handleClick?: (evt: any) => void
}
export const Card: React.FC<Props> = ({
  children,
  handleClick,
  extraClasses,
}) => {
  const handleCardClick = (evt: any) => {
    if (handleClick) {
      handleClick(evt)
    }
  }

  return (
    <div
      onClick={(evt) => handleCardClick(evt)}
      className={`bg-white shadow-md p-2 rounded-sm ${
        extraClasses ? extraClasses : ''
      }`}
    >
      {children}
    </div>
  )
}
