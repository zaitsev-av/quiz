import { FC } from 'react'

import { Page } from '../../components'
import { QuizDirectionSelector } from '../../components/quiz-direction-selector/quiz-direction-selector'

export const QuizDirectionSelectorPage: FC = () => {
  return (
    <Page>
      <QuizDirectionSelector />
    </Page>
  )
}
