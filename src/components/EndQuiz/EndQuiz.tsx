import React from 'react';
import s from './EndQuiz.module.css'

export type EndQuizPropsType = {};
export const EndQuiz: React.FC<EndQuizPropsType> = ( props ) => {
	const {} = props
	return (
		<div>
			<div className={ s.firework }
			     style={ { top: '50px', left: '50px' } }></div>
			<div className={ s.firework }
			     style={ { top: '80px', left: '80px' } }></div>
			<div className={ s.firework }
			     style={ { top: '100px', left: '150px' } }></div>
			<div className={ s.firework }
			     style={ { top: '120px', left: '200px' } }></div>
			<div className={ s.firework }
			     style={ { top: '150px', left: '250px' } }></div>
			<div className={ s.firework }
			     style={ { top: '180px', left: '300px' } }></div>
			<div className={ s.firework }
			     style={ { top: '200px', left: '350px' } }></div>
			<div className={ s.firework }
			     style={ { top: '220px', left: '400px' } }></div>
			<div className={ s.firework }
			     style={ { top: '250px', left: '450px' } }></div>
		</div>
	);
};