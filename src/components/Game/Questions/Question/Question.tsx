import { FC } from 'react'

import { QuizStateType } from '../../../../state'
import { FakeButton } from '../../../FakeButton/FakeButton'

export type QuestionPropsType = {
  state: QuizStateType[]
  checkResult: (id: string, questionID: number, num: number) => void
  removeQuestionHandler: (id: string) => void
  setCount: (count: number) => void // функцию нужно удалить сделать один обработчик на кнопку при котором будет происходить сравнение ответа
  count: number
  num: number
}
export const Question: FC<QuestionPropsType> = props => {
  const { num, count, setCount, checkResult, removeQuestionHandler, state } = props

  return (
    <div>
      {state[num].options.map(el => {
        const onClickButtonHandler = () => {
          console.log(state[num].question)
          checkResult(state[num].id, el.id, num)
          removeQuestionHandler(state[num].id)
          setCount(count + 1)
        }

        return <FakeButton key={el.id} answer={el.answer} callBack={onClickButtonHandler} />
      })}
    </div>
  )
}
