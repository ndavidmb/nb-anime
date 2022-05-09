interface Props {
  text: string
  fontSize?: 'sm' | 'xs';
  extraClasses?: string
}

export const Chip: React.FC<Props> = ({ text, fontSize = 'xs' }) => {
  return (
    <div className="flex items-center justify-center rounded-sm bg-indigo-100 text-indigo-500 w-max p-1">
      <span className={`text-${fontSize}`}>{text}</span>
    </div>
  )
}
