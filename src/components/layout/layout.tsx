import { FC } from 'react'

import { QuizDirectionSelectorPage } from '../../pages/quiz-direction-selector-page/quiz-direction-selector-page'
import { Header } from '../Header'

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <QuizDirectionSelectorPage />
    </>
  )
}
