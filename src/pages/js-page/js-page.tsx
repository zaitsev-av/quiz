import { FC, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { Page } from '../../components'
import { Questions } from '../../components/Game/Questions/Questions'
import { CheckResultAC, QuizStateTypeReducer, RemoveQuestionAC } from '../../state/questionReducer'
import { RootStateType } from '../../state/store'

export const JsPage: FC = () => {
  const state = useSelector<RootStateType, QuizStateTypeReducer>(state => state.questionReducer)
  const dispatch = useDispatch()
  // Количество вопросов в одном тесте будет 10
  const [count, setCount] = useState<number>(1) // будем считать ответы

  const removeQuestionHandler = (id: string) => {
    dispatch(RemoveQuestionAC(id))
  }
  const checkResult = (id: string, questionID: number, num: number) => {
    dispatch(CheckResultAC(id, questionID, num))
  }

  return (
    <Page mt={'5rem'}>
      <Questions
        state={state.quizState}
        setCount={setCount}
        count={count}
        removeQuestionHandler={removeQuestionHandler}
        checkResult={checkResult}
      />
    </Page>
  )
}
