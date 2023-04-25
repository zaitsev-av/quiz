import React from 'react';
import s from "../Question.module.css";

export type FakeButtonPropsType = {
	answer: string
	callBack: () => void
};
export const FakeButton: React.FC<FakeButtonPropsType> = ( props ) => {
	const {callBack, answer} = props
	return (
		<div className={ s.question } onClick={callBack}>
			<span>{ answer }</span>
		</div>
	);
};