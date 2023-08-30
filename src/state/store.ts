import { questionReducer } from './questionReducer'
import { combineReducers, createStore } from 'redux'

const rootReducer = combineReducers({
  questionReducer: questionReducer,
})

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store
