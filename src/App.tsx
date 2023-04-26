import s from './App.module.css'
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "./state/store";
import { useState } from "react";
import { Questions } from "./components/Game/Questions/Questions";
import { CheckResultAC, QuizStateTypeReducer, RemoveQuestionAC } from "./state/questionReducer";
import { EndQuiz } from "./components/EndQuiz/EndQuiz";
import { Header } from "./components/Header/Header";
import { Progress } from "./components/Progress/Progress";



function App() {
    const state = useSelector<RootStateType, QuizStateTypeReducer>( state => state.questionReducer )
    const dispatch = useDispatch()
    // Количество вопросов в одном тесте будет 10
    const [ count, setCount ] = useState<number>( 1 )// будем считать ответы
    
    const removeQuestionHandler = (id: string ) => {
        dispatch(RemoveQuestionAC(id))
    }
    const checkResult = (id: string,questionID: number, num: number) => {
        dispatch(CheckResultAC(id, questionID, num))
    }
    return (
        <>
            <Header/>
            <Progress count={count}/>
        <div className={ s.app }>
            {count <= 10 ?
                <>
                    <Questions
                        state={ state.quizState }
                            setCount={ setCount }
                            count={ count }
                            removeQuestionHandler={ removeQuestionHandler }
                    checkResult={checkResult}
                    />
                   
                    <span>Question: {count}</span>
                </>
                :
                <EndQuiz/>
                // <span>Correct: {state.count}</span>
          
                
            }
        </div>
        </>
    )
}

export default App
