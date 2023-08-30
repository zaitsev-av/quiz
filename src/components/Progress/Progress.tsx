import s from './Progress.module.css'
import { FC } from 'react'

export type ProgressPropsType = {
  count: number
}
export const Progress: FC<ProgressPropsType> = props => {
  const { count } = props
  return (
    <div className={s.progress_container}>
      <div className={s.progress}>
        <div style={{ width: `${count * 10}%` }} className={s.inner}></div>
      </div>
    </div>
  )
}
