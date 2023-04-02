import { v1 } from "uuid";

export type QuizStateType = {
	id: string
	question: string
	options: OptionsType[]
}
export type OptionsType = {
	answer: string
	correct: boolean
}
 export const quiz: QuizStateType[] = [
	{   id: v1(),
		question: "1. Какой тип данных используется для обозначения чисел в JavaScript?",
		options: [
			{ answer: "string", correct: false },
			{ answer: "number", correct: true },
			{ answer: "boolean", correct: false }
		]
	},
	{
		id: v1(),
		question: "2. Что такое JSX в React?",
		options: [
			{ answer: "Модульный синтаксис JavaScript", correct: false },
			{ answer: "Расширение синтаксиса JavaScript, позволяющее использовать HTML-подобный синтаксис в React", correct: true },
			{ answer: "Функция в React, которая отвечает за вывод компонентов", correct: false }
		]
	},
	{
		id: v1(),
		question: "3. Как создать функциональный компонент в React?",
		options: [
			{ answer: "class MyComponent extends React.Component", correct: false },
			{ answer: "const MyComponent = () => {...}", correct: true },
			{ answer: "const MyComponent = React.createFunctionComponent(...)", correct: false }
		]
	},
	{
		id: v1(),
		question: "4. Что такое props в React?",
		options: [
			{ answer: "Стандартные свойства HTML-элементов", correct: false },
			{ answer: "Объект, содержащий свойства, переданные компоненту из родительского компонента", correct: true },
			{ answer: "Названия классов CSS", correct: false }
		]
	},
	{
		id: v1(),
		question: "5. Как добавить класс к элементу в React?",
		options: [
			{ answer: "const element = <div class='my-class' />", correct: false },
			{ answer: "const element = <div className='my-class' />", correct: true },
			{ answer: "const element = <div class='my-class'></div>", correct: false }
		]
	},
	{
		id: v1(),
		question: "6. Что такое state в React?",
		options: [
			{ answer: "Объект, содержащий состояние компонента", correct: true },
			{ answer: "Функция, которая обрабатывает изменения состояния", correct: false },
			{ answer: "Свойство, которое определяет, должен ли компонент рендериться", correct: false }
		]
	},
	{
		id: v1(),
		question: "7. Как изменить состояние компонента в React?",
		options: [
			{ answer: "this.props.state = {...}", correct: false },
			{ answer: "const newState = {...}; this.state = newState;", correct: false },
			{ answer: "this.setState({...})", correct: true }
		]
	},
	{
		id: v1(),
		question: "8. Что такое useEffect в React?",
		options: [
			{ answer: "Функция, которая вызывается при каждом рендере компонента", correct: false },
			{ answer: "Хук, который позволяет добавлять эффекты (например, загрузку данных) при монтировании, обновлении и размонтировании компонента", correct: true },
			{ answer: "Метод, который вызывается перед рендерингом компонента", correct: false }
		]
	},
	{
		id: v1(),
		question: "9. Что такое TypeScript?",
		options: [
			{ answer: "Статически типизированный язык программирования, который является надмножеством JavaScript", correct: true },
			{ answer: "База данных, используемая для хранения данных веб-приложений", correct: false },
			{ answer: "Библиотека для работы с асинхронными операциями", correct: false }
		]
	},
	{
		id: v1(),
		question: "10. Как объявить переменную в TypeScript?",
		options: [
			{ answer: "var myVar: number = 10;", correct: false },
			{ answer: "let myVar = 10;", correct: false },
			{ answer: "const myVar: number = 10;", correct: true }
		]
	},
	{
		id: v1(),
		question: "11. Что такое интерфейс в TypeScript?",
		options: [
			{ answer: "Описание формата объекта или класса", correct: true },
			{ answer: "Функция, которая выполняет определенную задачу", correct: false },
			{ answer: "Структура данных, используемая для хранения списков", correct: false }
		]
	},
	{
		id: v1(),
		question: "12. Как указать тип переменной в TypeScript?",
		options: [
			{ answer: "let myVar = 10;", correct: false },
			{ answer: "let myVar: number = 10;", correct: true },
			{ answer: "const myVar = (num: number) => {...}", correct: false }
		]
	},
	{
		id: v1(),
		question: "13. Что такое дженерики (generics) в TypeScript?",
		options: [
			{ answer: "Обобщенные типы данных, которые позволяют создавать универсальные функции и классы", correct: true },
			{ answer: "Библиотека для работы с HTTP-запросами", correct: false },
			{ answer: "Специальные типы данных, используемые для определения массивов", correct: false }
		]
	},
	{
		id: v1(),
		question: "14. Как указать тип аргументов и возвращаемого значения функции в TypeScript?",
		options: [
			{ answer: "const myFunc = (arg1, arg2) => {...}", correct: false },
			{ answer: "const myFunc = (arg1: number, arg2: string): boolean => {...}", correct: true },
			{ answer: "function myFunc(arg1, arg2) {...}", correct: false }
		]
	},
	{
		id: v1(),
		question: "15. Что такое массивы в JavaScript?",
		options: [
			{ answer: "Структура данных, которая хранит ключ-значение", correct: false },
			{ answer: "Структура данных, которая хранит набор элементов", correct: true },
			{ answer: "Функция, которая выполняет определенную задачу", correct: false }
		]
	},
	{
		id: v1(),
		question: "16. Как добавить элемент в конец массива в JavaScript?",
		options: [
			{ answer: "myArray.add(element);", correct: false },
			{ answer: "myArray.push(element);", correct: true },
			{ answer: "myArray.append(element);", correct: false }
		]
	},
	{
		id: v1(),
		question: "17. Как удалить элемент из массива в JavaScript?",
		options: [
			{ answer: "myArray.splice(index, 1);", correct: true },
			{ answer: "myArray.remove(element);", correct: false },
			{ answer: "myArray.pop(element);", correct: false }
		]
	},
	{
		id: v1(),
		question: "18. Как отсортировать массив в JavaScript?",
		options: [
			{ answer: "myArray.sort();", correct: true },
			{ answer: "myArray.orderBy();", correct: false },
			{ answer: "myArray.filter();", correct: false }
		]
	},
	{
		id: v1(),
		question: "19. Что такое метод map в JavaScript?",
		options: [
			{ answer: "Метод массива, который позволяет преобразовать каждый элемент массива с помощью функции", correct: true },
			{ answer: "Метод массива, который возвращает первый элемент массива", correct: false },
			{ answer: "Метод массива, который удаляет последний элемент массива", correct: false }
		]
	},
	{
		id: v1(),
		question: "20. Как создать объект в JavaScript?",
		options: [
			{ answer: "object myObj = new Object();", correct: false },
			{ answer: "const myObj = {key1: value1, key2: value2};", correct: false },
			{ answer: "const myObj = new Object({key1: value1, key2: value2});", correct: true }
		]
	},
	{
		id: v1(),
		question: "21. Что такое методы объекта в JavaScript?",
		options: [
			{ answer: "Функции, которые объявлены внутри объекта и могут использоваться для выполнения определенных действий с объектом", correct: true },
			{ answer: "Свойства объекта, которые содержат значения", correct: false },
			{ answer: "Структуры данных, которые хранят ключ-значение", correct: false }
		]
	},
	{
		id: v1(),
		question: "22. Как получить значение свойства объекта в JavaScript?",
		options: [
			{ answer: "myObj.getValue(property);", correct: false },
			{ answer: "myObj.property;", correct: true },
			{ answer: "myObj.getPropertyValue(property);", correct: false }
		]
	},
	{
		id: v1(),
		question: "23. Что такое функции обратного вызова (callback) в JavaScript?",
		options: [
			{ answer: "Функции, которые передаются в качестве аргументов другим функциям и вызываются внутри этих функций", correct: true },
			{ answer: "Функции, которые вызываются автоматически при определенных событиях", correct: false },
			{ answer: "Функции, которые вызывают другие функции", correct: false }
		]
	},
	{
		id: v1(),
		question: "24. Как создать функцию обратного вызова в JavaScript?",
		options: [
			{ answer: "const myCallback = (arg1, arg2) => {...}", correct: true },
			{ answer: "function myCallback(arg1, arg2) {...}", correct: false },
			{ answer: "const myCallback = new Function(arg1, arg2, {...})", correct: false }
		]
	},
	{
		id: v1(),
		question: 'Что такое методы массива в JavaScript?',
		options: [
			{ answer: 'Функции, которые объявлены внутри массива и могут использоваться для выполнения определенных действий с массивом', correct: true },
			{ answer: 'Свойства массива, которые содержат значения', correct: false },
			{ answer: 'Структуры данных, которые хранят ключ-значение', correct: false }
		]
	},
	{
		id: v1(),
		question: 'Как получить длину массива в JavaScript?',
		options: [
			{ answer: 'myArray.getLength();', correct: false },
			{ answer: 'myArray.length;', correct: true },
			{ answer: 'myArray.size();', correct: false }
		]
	},
	{
		id: v1(),
		question: 'Что такое метод filter в JavaScript?',
		options: [
			{ answer: 'Метод массива, который возвращает новый массив, содержащий элементы, прошедшие проверку с помощью функции', correct: true },
			{ answer: 'Метод массива, который удаляет элементы, прошедшие проверку с помощью функции', correct: false },
			{ answer: 'Метод массива, который сортирует элементы по заданному критерию', correct: false }
		]
	},
	{
		id: v1(),
		question: 'Как добавить элемент в начало массива в JavaScript?',
		options: [
			{ answer: 'myArray.unshift(element);', correct: true },
			{ answer: 'myArray.addFirst(element);', correct: false },
			{ answer: 'myArray.prepend(element);', correct: false }
		]
	},
	{
		id: v1(),
		question: 'Что такое метод reduce в JavaScript?',
		options: [
			{ answer: 'Метод массива, который применяет функцию к каждому элементу массива, последовательно уменьшая массив до одного значения', correct: true },
			{ answer: 'Метод массива, который объединяет два массива в один', correct: false },
			{ answer: 'Метод массива, который возвращает случайный элемент массива', correct: false }
		]
	},
	{
		id: v1(),
		question: 'Как объединить два массива в JavaScript?',
		options: [
			{ answer: 'myArray.join(otherArray);', correct: false },
			{ answer: 'myArray.concat(otherArray);', correct: false },
			{ answer: '[...myArray, ...otherArray];', correct: true }
		]
	}
];
