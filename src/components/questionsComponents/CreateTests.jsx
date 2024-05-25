import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './CreateTests.css';
import {Question, QuestionFactory, SelectOneQuestion, SelectManyQuestions,StringQuestion}  from "./Question";

export function CreateTests() {
    
    const [testName, setTestName] = useState('');
    const [newQuestion, setNewQuestion] = useState({condition: '', type: '', answerOptions: '', correctAnswer: ''});
    const [questions, setQuestions] = useState([]);
    const navigate = useNavigate();
    const questionFactory = new QuestionFactory();
    
    const addQuestion = (e) => {
        e.preventDefault();
        const {condition, type, answerOptions, correctAnswer} = newQuestion;

        const question = questionFactory.createQuestion(type, condition, answerOptions, correctAnswer);
        setQuestions((prev) => [...prev, question]);
        setNewQuestion({ condition: '', type: '', answerOptions: '', correctAnswer: '' });
        alert("Вопрос создан успешно!");
    }
     const handleCreateTest = () => {
        if (questions.length === 0) {
            alert("Вы должны добавить хотя бы один вопрос перед созданием теста!");
            return;
        }
        navigate('/PrintTests', { state: { testName, questions } });
    }
   

   

    return (
        <div className="wrapper_page">
            <header className="createtest">
            <h3 className="title_createtest">Создание теста</h3>
            </header>
            <section className="container_question">
                <form className="form_question">
                <label htmlFor="title">Введите название теста:</label>
                 <input id="title" type="text" placeholder="Название теста" className="title_question"
                 value={testName} onChange={(e) => setTestName(e.target.value)}/>
                <label htmlFor="countQuestion">Введите условие задания:</label>
                <input id="countQuestion" type="text" placeholder="Введите условие задания" value={newQuestion.condition} 
                onChange={(e) => setNewQuestion({...newQuestion, condition: e.target.value})}className="count_question"/>
                <p>Выберите тип задания:</p>
                <select className="select_type" value={newQuestion.type} onChange={(e) => setNewQuestion({ ...newQuestion, type: e.target.value })}>
                    <option value="selectOne">С одним вариантом ответа</option>
                    <option value="selectMany">С несколькими вариантами ответа</option>
                    <option value="selectString">Необходимо ввести ответ на вопрос</option>
                </select>
                <label htmlFor="answerOptions">Введите варианты ответа через запятую:</label>
                <input id="answerOptions" type="text" value={newQuestion.answerOptions}
                onChange={(e) => setNewQuestion({...newQuestion, answerOptions: e.target.value})} placeholder="Введите варианты ответов через запятую:" className="answer_options"/>
                <label htmlFor="answerRes">Введите ответ или ответы через запятую:</label>
                <input id="answerRes" type="text"  placeholder="Введите ответ или ответы через запятую" className="answer_options"
                value={newQuestion.correctAnswer}  onChange={(e) => setNewQuestion({...newQuestion, correctAnswer: e.target.value})}/>

                <button type="button" onClick={addQuestion} className="btn btn_add">Добавить вопрос</button> 
                <button type="submit" className="btn btn_create" onClick={handleCreateTest}>Создать тест</button> 
         </form>
            </section>


       </div>
    );
}
