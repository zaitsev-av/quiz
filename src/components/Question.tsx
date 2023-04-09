import React from 'react';
import { QuizStateType } from "../state";


export type QuestionPropsType = {
	state: QuizStateType[]
	setCount: (count: number)=> void // функцию нужно удалить сделать один обработчик на кнопку при котором будет происходить сравнение ответа
	count: number
	removeQuestionHandler: (id: string) => void
	checkResult:(id: string,questionID: number, num: number) => void
};
export const Question: React.FC<QuestionPropsType> = ( props ) => {
	const { state,setCount, count, removeQuestionHandler, checkResult } = props
	const randomInteger = ( min: number, max: number ) => {
		return Math.floor( min + Math.random() * ( max - min + 1 ) );
	}
	
	const num = randomInteger( 0, 30 )
	
	return (
		<>
			<h2>{ state[ num ].question }</h2>
			<div>{ state[ num ].options.map( el => {
				const onClickButtonHandler = () => {
					debugger
					checkResult(state[num].id, el.id, num)
					removeQuestionHandler(state[num].id)//подправть аргументы этой функции
					setCount(count+1)
				}
				return (
					<div key={el.id}>
						<span>{ el.answer }</span>
						<button onClick={onClickButtonHandler}>+</button>
					</div>
					
				)
			} ) }</div>
			
		</>
	);
};