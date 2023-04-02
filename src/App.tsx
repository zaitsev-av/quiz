import './App.css'
import { useSelector } from "react-redux";
import { QuizStateType } from "./state";
import { RootStateType } from "./state/store";
import { useMemo, useState } from "react";
import { Question } from "./components/Question";

function App() {
    const state = useSelector<RootStateType, QuizStateType[]>( state => state.questionReducer )
    
    // Количество вопросов в одном тесте будет 10
    const [ count, setCount ] = useState<number>( 0 )// будем считать ответы
    let question = useMemo( () =>
            <Question state={ state }
                      setCount={ setCount }
                      count={ count }/>
        , [ count ] )
    return (
        <div className="App">
            { question }
        </div>
    )
}

export default App
