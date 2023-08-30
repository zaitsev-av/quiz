import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout } from './components/layout/layout'
import { QuizDirectionSelectorPage } from './pages/quiz-direction-selector-page/quiz-direction-selector-page'
import { CheckResultAC, QuizStateTypeReducer, RemoveQuestionAC } from './state/questionReducer'
import { RootStateType } from './state/store'

export const App = () => {
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
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <QuizDirectionSelectorPage />,
        },
        {
          path: '/js',
          element: <div>js</div>,
        },
        {
          path: '/react',
          element: <div>React</div>,
        },
        {
          path: '/redux',
          element: <div>Redux</div>,
        },
      ],
    },
  ])

  return (
    <>
      <RouterProvider router={routes} />
      {/*<Header />*/}
      {/*<Progress count={count} />*/}
      {/*<div className={s.app}>*/}
      {/*  {*/}
      {/*    count <= 10 ? (*/}
      {/*      <>*/}
      {/*        <Questions*/}
      {/*          state={state.quizState}*/}
      {/*          setCount={setCount}*/}
      {/*          count={count}*/}
      {/*          removeQuestionHandler={removeQuestionHandler}*/}
      {/*          checkResult={checkResult}*/}
      {/*        />*/}

      {/*        <span>Question: {count}</span>*/}
      {/*      </>*/}
      {/*    ) : (*/}
      {/*      <EndQuiz />*/}
      {/*    )*/}
      {/*    // <span>Correct: {state.count}</span>*/}
      {/*  }*/}
      {/*</div>*/}
    </>
  )
}
