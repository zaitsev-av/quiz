import { FC } from 'react'

import { Typography } from '../typography'

import s from './quiz-direction-selector.module.scss'

export const QuizDirectionSelector: FC = () => {
  return (
    <div className={s.wrapper}>
      <button className={s.item}>
        <Typography variant={'large'}>JS</Typography>
      </button>
      <button className={s.item}>
        <Typography variant={'large'}>React</Typography>
      </button>
      <button className={s.item}>
        <Typography variant={'large'}>Redux</Typography>
      </button>
    </div>
  )
}
