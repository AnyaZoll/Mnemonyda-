import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './CreateTests.css';

export function CreateTests() {

    
    class CreateTests{
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
        <div className="wrapper_page">
            <header className="createtest">
            <h3 className="title_createtest">Создание теста</h3>
            </header>
            <section class="container_question">
                <p>Название теста:</p>
            </section>


       </div>
    );
}
