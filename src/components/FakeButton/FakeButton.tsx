import { FC } from 'react'

import s from '../Game/Questions/Questions.module.css'

export type FakeButtonPropsType = {
  answer: string
  callBack: () => void
}
export const FakeButton: FC<FakeButtonPropsType> = props => {
  const { callBack, answer } = props

  return (
    <div className={s.question} onClick={callBack}>
      <span>{answer}</span>
    </div>
  )
}
