import React from 'react';
import s from './EndQuiz.module.css'

export type EndQuizPropsType = {};
export const EndQuiz: React.FC<EndQuizPropsType> = ( props ) => {
	const {} = props
	return (
		<div className={ s.bg }>
			quiz end
			<ul className={s.glass}>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
	);
};