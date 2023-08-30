import { combineReducers, createStore } from 'redux'

import { questionReducer } from './questionReducer'

const rootReducer = combineReducers({
  questionReducer: questionReducer,
})

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store
