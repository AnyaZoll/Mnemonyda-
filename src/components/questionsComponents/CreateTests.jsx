import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './CreateTests.css';
import'./Question';

 
class QuestionFactory{
    create(conditionTask, type, answerOptions = [], rightAnswer){
        if (type === 'typeOne' || type === 'typeMany'){
            return new Question(conditionTask, type, answerOptions = [], rightAnswer );
        }
        if (type === 'typeString'){
            return new Question(conditionTask, type, answerOption, rightAnswer);
        }
    }
}

export function CreateTests() {

    const [questions, setQuestions] = useState([]);

    const addQuestion = (conditionTask, type, answerOption, rightAnswer) => {
        
        const newQuestion = QuestionFactory.create()
    }
    



    return (
        <div className="wrapper_page">
            <header className="createtest">
            <h3 className="title_createtest">Создание теста</h3>
            </header>
            <section className="container_question">
                <form action="#" method="post" className="form_question">
                <label htmlFor="title">Введите название теста:</label>
                 <input id="title" type="text" placeholder="Название теста" className="title_question"/>
                <label htmlFor="countQuestion">Введите условие задания:</label>
                <input id="countQuestion" type="text" placeholder="Введите условие задания" className="count_question"/>
                <p>Выберите тип задания:</p>
                <select className="select_type">
                    <option value="selectOne">С одним вариантом ответа</option>
                    <option value="selectMany">С несколькими вариантами ответа</option>
                    <option value="selectString">Необходимо ввести ответ на вопрос</option>
                </select>
                <label htmlFor="answerOptions">Введите варианты ответа через запятую:</label>
                <input id="answerOptions" type="text" placeholder="Введите варианты ответов через запятую:" className="answer_options"/>
                <label htmlFor="answerRes">Введите ответ или ответы через запятую:</label>
                <input id="answerRes" type="text" placeholder="Введите ответ или ответы через запятую" className="answer_options"/>

                <button className="btn btn_add">Добавить вопрос</button> 
                <button className="btn btn_create">Создать тест</button> 
         </form>
            </section>


       </div>
    );
}
