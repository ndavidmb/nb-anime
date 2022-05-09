import { useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import styles from './FloatMenu.module.css'

export const FloatMenu: React.FC = ({ children }) => {
  const [visible, setVisible] = useState(false)

  const openMenu = () => {
    console.log('open menu')
    setVisible(!visible)
  }

  const lostFocus = () => {
    console.log('lost focus')
    setVisible(false)
  }

  return (
    <button
      className="relative h-min"
      onClick={openMenu}
      onBlur={lostFocus}
    >
      <BsThreeDotsVertical />
      {visible && (
        <div className={`absolute z-10 shadow rounded-sm bg-white ${styles['menu-position']}`}>
          <ul>{children}</ul>
        </div>
      )}
    </button>
  )
}
