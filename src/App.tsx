import './App.css'
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "./state/store";
import { useState } from "react";
import { Question } from "./components/Question";
import { CheckResultAC, QuizStateTypeReducer, RemoveQuestionAC } from "./state/questionReducer";



function App() {
    const state = useSelector<RootStateType, QuizStateTypeReducer>( state => state.questionReducer )
    const dispatch = useDispatch()
    // Количество вопросов в одном тесте будет 10
    const [ count, setCount ] = useState<number>( 0 )// будем считать ответы
    
    const removeQuestionHandler = (id: string ) => {
        dispatch(RemoveQuestionAC(id))
    }
    const checkResult = (id: string,questionID: number, num: number) => {
        dispatch(CheckResultAC(id, questionID, num))
    }
    return (
        <div className="App">
            {count <= 10 ?
                <>
                    <Question state={ state.quizState }
                            setCount={ setCount }
                            count={ count }
                            removeQuestionHandler={ removeQuestionHandler }
                    checkResult={checkResult}
                    />
                    <span>Scale: { count * 10 }</span>
                    <span>Question: {count}</span>
                </>
                :
                <span>Correct: {state.count}</span>
          
                
            }
        </div>
    )
}

export default App
