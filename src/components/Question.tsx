import React from 'react';
import { QuizStateType } from "../state";

export type QuestionPropsType = {
	state: QuizStateType[]
	setCount: (count: number)=> void // функцию нужно удалить сделать один обработчик на кнопку при котором будет происходить сравнение ответа
	count: number
};
export const Question: React.FC<QuestionPropsType> = ( props ) => {
	const { state,setCount, count } = props
	const randomInteger = ( min: number, max: number ) => {
		return Math.floor( min + Math.random() * ( max - min + 1 ) );
	}
	const num = randomInteger( 0, 30 )
	return (
		<>
			<h2>{ state[ num ].question }</h2>
			<div>{ state[ num ].options.map( el => {
				return (
					<div>
						<input type={ "checkbox" }/>
						<span>{ el.answer }</span>
					</div>
				)
			} ) }</div>
			<button onClick={()=> setCount(count+1)}>+</button>
		</>
	);
};