import { FC } from 'react'

import { useNavigate } from 'react-router-dom'

import { Typography } from '../typography'

import s from './quiz-direction-selector.module.scss'

export const QuizDirectionSelector: FC = () => {
  const navigate = useNavigate()

  return (
    <div className={s.wrapper}>
      <button className={s.item} onClick={() => navigate('/js')}>
        <Typography variant={'large'}>JS</Typography>
      </button>
      <button className={s.item} onClick={() => navigate('/react')}>
        <Typography variant={'large'}>React</Typography>
      </button>
      <button className={s.item} onClick={() => navigate('/redux')}>
        <Typography variant={'large'}>Redux</Typography>
      </button>
    </div>
  )
}
