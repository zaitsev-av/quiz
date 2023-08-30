import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Layout } from './components/layout/layout'
import { JsPage } from './pages/js-page/js-page'
import { QuizDirectionSelectorPage } from './pages/quiz-direction-selector-page/quiz-direction-selector-page'

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
        element: <JsPage />,
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

export const App = () => {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}
