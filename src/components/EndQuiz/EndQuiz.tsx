import s from './EndQuiz.module.css'
import { FC } from 'react'

export type EndQuizPropsType = {}
export const EndQuiz: FC<EndQuizPropsType> = props => {
  const {} = props
  return (
    <div className={s.bg}>
      quiz end
      <ul className={s.glass}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}
