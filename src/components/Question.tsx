import React from 'react';
import { QuizStateType } from "../state";
import s from './Question.module.css'
import { FakeButton } from "./FakeButton/FakeButton";


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
		<div className={s.card}>
			
			<div className={s.card2}>
			<h2>{ state[ num ].question }</h2>
			<div>{ state[ num ].options.map( el => {
				const onClickButtonHandler = () => {
					debugger
					console.log(state[ num ].question)
					checkResult(state[num].id, el.id, num)
					removeQuestionHandler(state[num].id)
					setCount(count+1)
				}
				return (
					<FakeButton answer={el.answer} callBack={onClickButtonHandler}/>
				)
			} ) }</div>
			</div>
		</div>
	);
};