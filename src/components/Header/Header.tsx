import s from './Header.module.css'
import { FC } from 'react'
export type HeaderPropsType = {}
export const Header: FC<HeaderPropsType> = props => {
  const {} = props
  return <header className={s.header}>Quiz</header>
}
