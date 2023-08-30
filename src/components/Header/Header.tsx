import { FC } from 'react'

import s from './Header.module.css'

export type HeaderPropsType = {}
export const Header: FC<HeaderPropsType> = props => {
  const {} = props

  return <header className={s.header}>Quiz</header>
}
