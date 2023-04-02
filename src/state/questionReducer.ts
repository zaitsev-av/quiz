import { quiz, QuizStateType } from "../state";


const initialState = quiz
export const questionReducer = ( state: QuizStateType[] = initialState, action: any ): QuizStateType[] => {
	switch ( action.type ) {
		case 'aaaa': {
			return state
		}
		default: {
			return state
		}
	}
}
