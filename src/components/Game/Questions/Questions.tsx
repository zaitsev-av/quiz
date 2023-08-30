import { QuizStateType } from '../../../state'
import s from './Questions.module.css'
import { Question } from './Question/Question'
import { FC } from 'react'

export type QuestionPropsType = {
  state: QuizStateType[]
  setCount: (count: number) => void // функцию нужно удалить сделать один обработчик на кнопку при котором будет происходить сравнение ответа
  count: number
  removeQuestionHandler: (id: string) => void
  checkResult: (id: string, questionID: number, num: number) => void
}
export const Questions: FC<QuestionPropsType> = props => {
  const { state, setCount, count, removeQuestionHandler, checkResult } = props
  const randomInteger = (min: number, max: number) => {
    return Math.floor(min + Math.random() * (max - min + 1))
  }

  const num = randomInteger(0, 30)

  return (
    <div className={s.card}>
      <div className={s.card2}>
        <h2>{state[num].question}</h2>
        <Question
          key={state[num].id}
          state={state}
          checkResult={checkResult}
          removeQuestionHandler={removeQuestionHandler}
          setCount={setCount}
          count={count}
          num={num}
        />
      </div>
    </div>
  )
}
