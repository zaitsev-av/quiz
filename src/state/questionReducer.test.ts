import { describe, it } from 'vitest';
import { v1 } from "uuid";
import { RemoveQuestionAC, questionReducer } from "./questionReducer";


describe('TaskReducer testing', () => {
	it('should remove task from correct todolist', () => {
		let id1 = v1()
		let id2 = v1()
		let id3 = v1()
		const startState = {
			count: 0,
			quizState: [
				{
					id: id1,
					question: "1. Какой тип данных используется для обозначения чисел в JavaScript?",
					options: [
						{ id: 1, answer: "string", correct: false },
						{ id: 2, answer: "number", correct: true },
						{ id: 3, answer: "boolean", correct: false }
					]
				},
				{
					id: id2,
					question: "2. Что такое JSX в React?",
					options: [
						{ id: 1, answer: "Модульный синтаксис JavaScript", correct: false },
						{
							id: 2,
							answer: "Расширение синтаксиса JavaScript, позволяющее использовать HTML-подобный синтаксис в React",
							correct: true
						},
						{ id: 3, answer: "Функция в React, которая отвечает за вывод компонентов", correct: false }
					]
				},
				{
					id: id3,
					question: "3. Как создать функциональный компонент в React?",
					options: [
						{ id: 1, answer: "class MyComponent extends React.Component", correct: false },
						{ id: 2, answer: "const MyComponent = () => {...}", correct: true },
						{ id: 3, answer: "const MyComponent = React.createFunctionComponent(...)", correct: false }
					]
				}
			]
		}
		const endState = questionReducer(startState, RemoveQuestionAC(id1));
		
		expect(endState.quizState[0].id).toBe(id1);
		expect(endState.quizState[2].id).toBe(id2);
		// expect(endState.todolist2.length).toBe(2);
		// expect(endState.todolist1.every((t) => t.id !== '1')).toBeTruthy();
	});
});