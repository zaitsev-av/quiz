import { FC } from 'react'

import { Outlet } from 'react-router-dom'

import { QuizDirectionSelectorPage } from '../../pages/quiz-direction-selector-page/quiz-direction-selector-page'
import { Header } from '../Header'

export const Layout: FC = () => {
  return (
    <>
      <Header />
      {/*<QuizDirectionSelectorPage />*/}
      <Outlet />
    </>
  )
}
