interface Props {
  text: string
}

export const Chip = ({ text }: Props) => {
  return (
    <div className="flex text-xs items-center justify-center rounded-sm bg-indigo-100 text-indigo-500 w-max p-1">
      <span>{text}</span>
    </div>
  )
}
