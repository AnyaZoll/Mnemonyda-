import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export function CreateTest() {

    
    class CreateTest{
        constructor(titleTest, countQuestions, isTime){
            this.titleTest = titleTest;
            this.countQuestions = countQuestions;
            this.isTime = isTime;
        }
    }

    class CreateTestFactory{
        createTest(titleTest, countQuestions, isTime){
            return new CreateTest(titleTest, countQuestions, isTime);

        }
    } 
    class PrintQuestion {
        constructor(conditionText, answer, typeAnswer, correctAnswer, answerOptions = []) {
            this.conditionText = conditionText;
            this.answer = answer;
            this.typeAnswer = typeAnswer;
            this.correctAnswer = correctAnswer;
            this.answerOptions = answerOptions;
        }
        isTrueAnswer(userAnswer) {
            return this.correctAnswer === userAnswer;
        }
    }

    class QuestionFactory {
        static createQuestion(condition, answer, answerType, correctAnswer, answerOptions) {
            return new PrintQuestion(condition, answer, answerType, correctAnswer, answerOptions);
        }
    }

    class TestBuilder {
        static instance = null;
        questions = [];

        static getInstance() {
            if (!TestBuilder.instance) {
                TestBuilder.instance = new TestBuilder();
            }
            return TestBuilder.instance;
        }

        addQuestion(question) {
            this.questions.push(question);
        }
        getTest() {
            return this.questions;
        }
    }
    
    const [testName, setTestName] = useState('');
    const [newQuestion, setNewQuestion] = useState({ condition: '', answer: '', answerType: '', correctAnswer: '', answerOptions: [] });
    const [questions, setQuestions] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const navigate = useNavigate();

    const questionsFactory = new QuestionFactory();

    const handleCreateTest = () => {
        navigate('/PrintTest', { state: { testName, questions } });
    }

    const handleAddQuestion = () => {
        // Установка правильного ответа перед созданием вопроса
        newQuestion.correctAnswer = correctAnswer;

        const question = QuestionFactory.createQuestion(
            newQuestion.condition,
            newQuestion.answer,
            newQuestion.answerType,
            newQuestion.correctAnswer, // Используем свойство correctAnswer вместо newQuestion.correctAnswer
            newQuestion.answerOptions
        );
        TestBuilder.getInstance().addQuestion(question);

        setQuestions(prevQuestions => [...prevQuestions, question]);
        setNewQuestion({ condition: '', answer: '', answerType: '', correctAnswer: '', answerOptions: [] });
    }

    const handleAddAnswer = (e) => {
        setNewQuestion(prevState => ({
            ...prevState,
            answerOptions: e.target.value.split(',') // Разделяем варианты ответов по запятой
        }));
    }

    return (
        <div className="page">
            <div className="container">
                <label className="option">
                <label className="option label-text">
                 
                </label>
                    <input type='text' placeholder="Название теста" value={testName} onChange={(e) => setTestName(e.target.value)} />
                </label>
                <label className="option">
             
                    <input type='text' placeholder="Условие задания:" value={newQuestion.condition} onChange={(e) => setNewQuestion({ ...newQuestion, condition: e.target.value })} />
                </label>
                
                <select  value={newQuestion.answerType} onChange={(e) => setNewQuestion({ ...newQuestion, answerType: e.target.value })}>
                   
                    <option className="cl" value="typeOne">Один вариант ответа</option>
                    <option  className="cl" value="typeMany">Несколько вариантов ответа</option>
                    <option  className="cl" value="typeString">Необходимо ввести ответ на вопрос</option>
            
                </select>
               
                {newQuestion.answerType === 'typeMany' && (
                    <div>
                         <label className="option label-text">Введите варианты ответов (через запятую):</label>
                        <input type='text' value={newQuestion.answerOptions.join(',')} onChange={handleAddAnswer} />
                    </div>
                )}
                <div>
                    <label>Введите правильный ответ (через запятую):</label>
                    <input type='text' value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)} />
                </div>
                <button className="btn1" onClick={handleAddQuestion}>Добавить вопрос</button>
                <button className="btn1"onClick={handleCreateTest}>Создать тест</button>
                <p>Количество вопросов: {questions.length}</p>
            </div>
        </div>
    );
}
