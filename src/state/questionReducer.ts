import { quiz, QuizStateType } from "../state";


export type QuizStateTypeReducer = {
	count: number
	quizState: QuizStateType[]
}

const initialState:QuizStateTypeReducer = {
	count: 0,
	quizState: quiz
}
type ActionType = ReturnType<typeof RemoveQuestionAC> | ReturnType<typeof CheckResultAC>
export const questionReducer = ( state: QuizStateTypeReducer = initialState, action: ActionType ): QuizStateTypeReducer => {
	switch ( action.type ) {
		case "CHECK-RESULT": {
			debugger
			return state.quizState[ action.payload.num ].options[ action.payload.questionID-1 ].correct
				? {...state,count: state.count+1}
				: state
		}
		case 'REMOVE-ANSWERED-QUESTION': {
			return {...state, quizState: state.quizState.filter( el => el.id !== action.payload.id ) }// удаляю из стейта отвеченный вопрос чтобы он больше не попался
		}
		default: {
			return state
		}
	}
}

export const RemoveQuestionAC = ( id: string) => {
	return {
		type: "REMOVE-ANSWERED-QUESTION",
		payload: {
			id
		}
	} as const
}// нужно удалить здесь лишние аргументы

export const CheckResultAC = (id: string,questionID: number, num: number) => {
	return {
		type: 'CHECK-RESULT',
		payload: {
			id,
			questionID,
			num
		}
	} as const
}



